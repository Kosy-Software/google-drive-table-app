import { ComponentState } from "../lib/integrationState";
import { ComponentMessage } from '../lib/integrationmessages';

//Renders the viewing state
export function renderViewingState (state: ComponentState, dispatch: ((msg: ComponentMessage) => any)): HTMLElement {
    let viewingRoot = document.querySelector("#viewing") as HTMLTemplateElement;
    let viewingElement = viewingRoot.content.firstElementChild.cloneNode(true) as HTMLIFrameElement;
    viewingElement.src = state.googleDriveUrl;
    viewingElement.style.height = `${window.innerHeight}px`;
    return viewingElement;
}