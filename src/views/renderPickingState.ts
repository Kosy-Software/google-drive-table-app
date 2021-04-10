import { ComponentState } from "../lib/appState";
import { ComponentMessage } from "../lib/appMessages";
import { hasValidGoogleFormat, createFileShareLink } from '../lib/googleDrive';

//Renders the picking state
export function renderPickingState (state: ComponentState, dispatch: (msg: ComponentMessage) => any): HTMLElement {
    let pickingRoot = document.querySelector("#picking") as HTMLTemplateElement;
    let picker = pickingRoot.content.cloneNode(true) as HTMLElement;

    let fileUrlInput = picker.querySelector("input") as HTMLInputElement;
    let openFileBtn = picker.querySelector("#open-file") as HTMLInputElement;
    let errorLabel = picker.querySelector("#validation-error") as HTMLLabelElement;

    if (state.validationResponse.error) {
        switch (state.validationResponse.error) {
            case "NotShared":
                errorLabel.innerHTML = `The file is not shared. Please click <a href="${createFileShareLink(state.validationResponse.url)}" target="_blank">here</a> to enable file sharing.`;
                break;
            default:
                break;
        }
        fileUrlInput.style.color = "red";
    }

    fileUrlInput.value = state.validationResponse.url;
    fileUrlInput.oninput = (event: Event) => {
        const val = fileUrlInput.value;
        errorLabel.innerHTML = "";
        if (hasValidGoogleFormat(val)) {
            openFileBtn.removeAttribute("disabled");            
            fileUrlInput.style.color = "black";
        } else {
            openFileBtn.setAttribute("disabled", "disabled");
            fileUrlInput.style.color = "red";
        }
    }
    //This sets up the google input element -> on input changed -> relay a message
    openFileBtn.onclick = async (event: Event) => {
        let validationResult = { url: fileUrlInput.value }
        dispatch({  type: "google-drive-validation-changed", payload: validationResult });
    }

    //This sets up the onclick for the "Click me to view google drive" button
    (picker.querySelector("#open-picker") as HTMLButtonElement).onclick = async (event: Event) => {
        dispatch({ type: "file-picker-opened", payload: {} });
    }

    return picker;
}