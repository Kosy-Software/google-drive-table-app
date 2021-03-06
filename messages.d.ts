declare namespace Kozy {
    type HostHasChanged = {
        type: "HostHasChanged"
        payload: any
    }

    type ReceiveClientInfo = {
        type: "ReceiveClientInfo"
        payload: any
    }

    type ReadyAndListening = {
        type: "ReadyAndListening"
        payload: any
    }

    type RelayToHost = {
        type: "RelayToHost"
        payload: any
    }

    type RelayToAllClients = {
        type: "RelayToAllClients"
        payload: any
    }

    type IncomingSystemMessage =
        | HostHasChanged
        | ReceiveClientInfo

    type OutgoingSystemMessage =
        | ReadyAndListening
        | RelayToHost
        | RelayToAllClients
}