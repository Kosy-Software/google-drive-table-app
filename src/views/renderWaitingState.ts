import { ComponentState } from '../lib/integrationState';
import { ComponentMessage } from '../lib/integrationmessages';

//Renders the waiting state
export function renderWaitingState (state: ComponentState, dispatch: ((msg: ComponentMessage) => any)): HTMLElement {
    let waitingRoot = document.querySelector("#waiting") as HTMLTemplateElement;
    let waitingElement = waitingRoot.content.firstElementChild.cloneNode(true) as HTMLElement;
    let label = document.createElement("label");
    label.innerHTML = `${state.initializer.clientName} is picking a file`;
    waitingElement.appendChild(label);
    return waitingElement;
}