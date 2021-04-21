import { ComponentState } from '../lib/appState';
import { ComponentMessage } from '../lib/appMessages';
import { authorizeWithGoogle } from '../lib/googleDrive';

//Renders the waiting state
export function renderWaitingState (state: ComponentState, dispatch: ((msg: ComponentMessage) => any)): HTMLElement {
    let waitingRoot = document.querySelector("#waiting") as HTMLTemplateElement;
    let waitingElement = waitingRoot.content.firstElementChild.cloneNode(true) as HTMLElement;
    let label = waitingElement.querySelector("label") as HTMLElement;
    let loginButton = waitingElement.querySelector(".login") as HTMLButtonElement;
    label.innerHTML = state.googleDriveUrl ? 
        `${state.initializer.clientName} has picked a file to share,` + "<br/>" + `please log in with google to view it` : 
        `${state.initializer.clientName} is picking a file to share`;
    if (state.userIsSignedIntoGoogle) {
        loginButton.remove();
    } else {
        loginButton.onclick = () => authorizeWithGoogle().catch(() => Promise.resolve()).then(() => dispatch({ type: "authenticated-with-google" }));
    }
    return waitingElement;
}