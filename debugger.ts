import * as KosyFrameWork from "./framework";

module Kosy {
    class StartupParameters {
        "integration-url": string
    }

    type KosyClient = { 
        info: KosyFrameWork.ClientInfo,
        iframe: HTMLIFrameElement
    }

    type ClientMessage = any;

    const defaultBuilding: KosyFrameWork.Building = {
        buildingKey: "TestBuilding",
        buildingName: "TestBuilding"
    }
    const defaultFloor: KosyFrameWork.Floor = {
        floorUuid: "TestFloor",
        floorName: "TestFloor"
    }
    const defaultTable: KosyFrameWork.Table = {
        tableUuid: "TestTable",
        tableName: "TestTable",
        numberOfSeats: 999
    }
    const defaultRoom: KosyFrameWork.Room = {
        roomUuid: "TestRoom",
        roomName: "TestRoom"
    }

    export class KosyDebugger {
        private clients: Array<KosyClient> = [];
        private addClientButton: HTMLButtonElement;
        private clientDiv: HTMLElement;

        constructor () {
            this.addClientButton = document.getElementById("add-client") as HTMLButtonElement;
            this.clientDiv = document.getElementById("clients");
        }

        private log (...message: any[]) {
            console.log(...message);
        }

        private findUnclaimedSeatNumber(table: KosyFrameWork.Table): number {
            let seatsArray = new Array(table.numberOfSeats);
            this.clients.forEach(client => {
                switch (client.info.clientLocation.type) {
                    case "seated-at-table":
                        seatsArray[client.info.clientLocation.seatNumber - 1] = true;
                        break;
                    default:
                        break;
                }
            });
            for (let index = 0; index < seatsArray.length; index++) {
                if (!seatsArray[index]) {
                    return index + 1;
                }
            }
            throw "No more available unclaimed seats...";
        }

        private createClientHasJoinedMessage (kosyClient: KosyClient): KosyFrameWork.ClientHasJoined {
            return {
                type: "client-has-joined",
                payload: kosyClient.info
            }
        }

        private createClientHasLeftMessage (kosyClient: KosyClient): KosyFrameWork.ClientHasLeft {
            return {
                type: "client-has-left",
                payload: kosyClient.info
            }
        }

        private createReceiveInitialInfoMessage (kosyClient: KosyClient, initializer: KosyClient): KosyFrameWork.ReceiveInitialInfo {
            return {
                type: "receive-initial-info",
                payload: {
                    clients: 
                        this.clients.reduce((map: { [clientUuid: string]: KosyFrameWork.ClientInfo }, nextValue) => { 
                            map[nextValue.info.clientUuid] = nextValue.info;
                            return map;
                        }, {}),
                    currentClientUuid: kosyClient.info.clientUuid,
                    initializerClientUuid: initializer.info.clientUuid
                }
            }
        }

        private createReceiveMessage (payload: ClientMessage): KosyFrameWork.ReceiveMessage<ClientMessage> {
            return {
                type: "receive-message",
                payload
            }
        }

        public sendOutgoingMessage (message: KosyFrameWork.ServerToClientMessage<ClientMessage>, fromClient: KosyClient) {
            fromClient.iframe.contentWindow.postMessage(message, "*");
        }

        public receiveIncomingMessage (source: MessageEventSource, message: KosyFrameWork.ClientToServerMessage<ClientMessage>) {
            switch (message.type) {
                case "ready-and-listening":
                    this.log("Kosy received: Ready and listening.");
                    let kosyClients = this.clients.filter(client => client.iframe.contentWindow === source);
                    if (kosyClients.length === 1) {
                        let kosyClient = kosyClients[0];
                        let receiveClientInfoMessage = this.createReceiveInitialInfoMessage(kosyClient, this.clients[0]);
                        this.sendOutgoingMessage(receiveClientInfoMessage, kosyClient);
                        let clientHasJoinedMessage = this.createClientHasJoinedMessage(kosyClient)
                        this.clients.forEach(client => this.sendOutgoingMessage(clientHasJoinedMessage, client));
                    } else {
                        throw "Could not find the message's source, this should not occur?"
                    }
                    break;
                case "relay-message":
                    this.log("Kosy received: Relay message: ", message.payload);
                    let receiveMessage = this.createReceiveMessage(message.payload);
                    this.clients.forEach(client => this.sendOutgoingMessage(receiveMessage, client));
                    break;
                default:
                    this.log("Kosy received an unexpected message: ", message);
                    break;    
            }
        }

        private unregisterClient(client: KosyClient): void {
            this.clients = this.clients.filter(existing => existing != client);
            this.clients.forEach(notRemovedClient => this.sendOutgoingMessage(this.createClientHasLeftMessage (client), notRemovedClient));
            client.iframe.parentElement.remove();
        }

        private registerClient(kosyClient: KosyClient): void {
            this.clients.push(kosyClient);
        }

        private generateClientInfo(): KosyFrameWork.ClientInfo {
            let clientId = Date.now().toString();
            return {
                clientUuid: clientId,
                clientName: clientId,
                clientLocation: {
                    type: "seated-at-table",
                    building: defaultBuilding,
                    floor: defaultFloor,
                    room: defaultRoom,
                    table: defaultTable,
                    seatNumber: this.findUnclaimedSeatNumber(defaultTable)
                }
            }
        }

        private addNewClient (url: string): void {
            let info = this.generateClientInfo();

            let iframeContainer = document.createElement("div");
            iframeContainer.style.display = "inline-grid";
            let iframe = document.createElement("iframe");
            iframe.src = url;
            iframe.id = info.clientUuid;
            iframe.style.width = "700px";
            iframe.style.height = "400px";
            iframeContainer.appendChild(iframe);

            let removeClientButton = document.createElement("button");
            removeClientButton.innerHTML = "Leave the table";
            iframeContainer.appendChild(removeClientButton);
            this.clientDiv.appendChild(iframeContainer);

            let kosyClient = { info, iframe }
            this.registerClient(kosyClient);
            removeClientButton.onclick = event => {
                this.unregisterClient(kosyClient);
            };
        }

        public start (params: StartupParameters): void {
            window.addEventListener("message", (event: MessageEvent<KosyFrameWork.ClientToServerMessage<ClientMessage>>) => {
                this.receiveIncomingMessage(event.source, event.data);
            });
            this.addClientButton.onclick = event => {
                this.addNewClient (params["integration-url"]);
            }
        }
    }
}

fetch("settings.json")
.then(response => response.json())
.then(json => new Kosy.KosyDebugger().start(json));