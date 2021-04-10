import { ComponentState } from "../lib/appState";
import { ComponentMessage } from '../lib/appMessages';
import { convertGoogleLinkToEmbeddableLink } from "../lib/googleDrive";

//Renders the viewing state
export function renderViewingState (state: ComponentState, dispatch: (msg: ComponentMessage) => any): HTMLElement {    
    let viewingRoot = document.querySelector("#viewing") as HTMLTemplateElement;
    let viewingElement = viewingRoot.content.firstElementChild.cloneNode(true) as HTMLIFrameElement;
    let iframe = viewingElement.querySelector("iframe");
    iframe.style.height = `${window.innerHeight}px`;
    iframe.src = convertGoogleLinkToEmbeddableLink(state.googleDriveUrl);
    return viewingElement;
}