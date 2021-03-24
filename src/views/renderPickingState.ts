import { ComponentState } from "../lib/appState";
import { ComponentMessage } from "../lib/appMessages";
import { isValidGoogleDriveUrl } from "../lib/validation";

//Renders the picking state
export function renderPickingState (state: ComponentState, dispatch: ((msg: ComponentMessage) => any)): HTMLElement {
    let pickingRoot = document.querySelector("#picking") as HTMLTemplateElement;
    let picker = pickingRoot.content.cloneNode(true) as HTMLElement;

    let fileUrlInput = picker.querySelector("input");
    let openFileBtn = picker.querySelector("#open-file") as HTMLInputElement;
    fileUrlInput.oninput = (event: Event) => {
        const val = fileUrlInput.value;
        if (isValidGoogleDriveUrl(val)) {
            openFileBtn.removeAttribute("disabled");
            fileUrlInput.style.color = "black";
        } else {
            openFileBtn.setAttribute("disabled", "disabled");
            fileUrlInput.style.color = "red";
        }
    }    
    //This sets up the google input element -> on input changed -> relay a message
    openFileBtn.onclick = (event: Event) => {
        //First draft -> google drive url needs to be validated, for now, this just accepts everything
        let url = fileUrlInput.value;
        dispatch({  type: "google-drive-url-changed", payload: url });
    }

    //This sets up the onclick for the "Click me to view google drive" button
    (picker.querySelector("#open-picker") as HTMLButtonElement).onclick = async (event: Event) => {
        dispatch({ type: "file-picker-opened", payload: {} });
    }
    return picker;
}