import { ComponentState } from '../lib/appState';
import { ComponentMessage } from '../lib/appMessages';
import { authorizeWithGoogle } from '../lib/googleDrive';

//Renders the waiting state
export function renderLoginWithGoogleState (state: ComponentState, dispatch: ((msg: ComponentMessage) => any)): HTMLElement {
    let waitingRoot = document.querySelector("#waiting") as HTMLTemplateElement;
    let waitingElement = waitingRoot.content.firstElementChild.cloneNode(true) as HTMLElement;
    let label = waitingElement.querySelector("label") as HTMLElement;
    let loginButton = waitingElement.querySelector(".login") as HTMLButtonElement;
    label.innerHTML = "To start sharing a file, please log in with google"
    loginButton.onclick = () => authorizeWithGoogle().catch(() => Promise.resolve()).then(() => dispatch({ type: "authenticated-with-google" }));
    return waitingElement;
}