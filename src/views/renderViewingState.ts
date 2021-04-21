import { ComponentState } from "../lib/appState";
import { ComponentMessage } from '../lib/appMessages';
import { authorizeWithGoogle, convertGoogleLinkToEmbeddableLink, getUserIsSignedIntoGoogle } from "../lib/googleDrive";

//Renders the viewing state
export function renderViewingState (state: ComponentState, dispatch: (msg: ComponentMessage) => any): HTMLElement {
    let viewingRoot = document.querySelector("#viewing") as HTMLTemplateElement;
    let viewingElement = viewingRoot.content.firstElementChild.cloneNode(true) as HTMLElement;
    let iframe = viewingElement.querySelector("iframe") as HTMLIFrameElement;
    let overlay = viewingElement.querySelector(".overlay") as HTMLElement;
    let showIframe = () => {
        overlay.style.display = "none";
        iframe.style.height = "100vh";
        iframe.style.width = "100vw";
        iframe.src = convertGoogleLinkToEmbeddableLink(state.googleDriveUrl);
    }
    getUserIsSignedIntoGoogle().catch(() => false).then((userIsSignedIn) => {
        if (userIsSignedIn) {
            let loginButton = viewingElement.querySelector(".login") as HTMLButtonElement;
            loginButton.onclick = () => {
                authorizeWithGoogle().then(() => {
                    showIframe ();
                });
            }
        } else {
            showIframe ();
        }
    });
    return viewingElement;
}