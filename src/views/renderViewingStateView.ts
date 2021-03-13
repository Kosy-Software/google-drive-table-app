import { IntegrationState } from "../lib/integrationState";
import { IntegrationMessage } from '../lib/integrationmessages';

//Renders the viewing state
export function renderViewingStateView(state: IntegrationState, dispatch: ((msg: IntegrationMessage) => any)): HTMLElement {
    let viewingRoot = document.querySelector("#viewing") as HTMLTemplateElement;
    let viewingElement = viewingRoot.content.firstElementChild.cloneNode(true) as HTMLIFrameElement;
    viewingElement.src = state.googleDriveUrl;
    viewingElement.style.height = `${window.innerHeight}px`;
    return viewingElement;
}