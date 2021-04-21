import { ComponentState } from "../lib/appState";
import { ComponentMessage } from '../lib/appMessages';
import { convertGoogleLinkToEmbeddableLink } from "../lib/googleDrive";

//Renders the viewing state
export function renderViewingState (state: ComponentState, dispatch: (msg: ComponentMessage) => any): HTMLElement {
    let viewingRoot = document.querySelector("#viewing") as HTMLTemplateElement;
    let viewingElement = viewingRoot.content.firstElementChild.cloneNode(true) as HTMLElement;
    let iframe = viewingElement.querySelector("iframe") as HTMLIFrameElement;
    iframe.style.height = "100vh";
    iframe.style.width = "100vw";
    iframe.src = convertGoogleLinkToEmbeddableLink(state.googleDriveUrl);
    return viewingElement;
}