import { ComponentState } from "../lib/appState";
import { ComponentMessage } from '../lib/appMessages';

//Renders the viewing state
export function renderViewingState (state: ComponentState, dispatch: ((msg: ComponentMessage) => any)): HTMLElement {
    let viewingRoot = document.querySelector("#viewing") as HTMLTemplateElement;
    let viewingElement = viewingRoot.content.firstElementChild.cloneNode(true) as HTMLIFrameElement;
    let iframe = viewingElement.querySelector("iframe");
    iframe.src = state.googleDriveUrl;
    iframe.style.height = `${window.innerHeight}px`;
    return viewingElement;
}