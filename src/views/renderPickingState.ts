import { ComponentState } from "../lib/integrationState";
import { ComponentMessage } from '../lib/integrationmessages';

//Renders the picking state
export function renderPickingState (state: ComponentState, dispatch: ((msg: ComponentMessage) => any)): HTMLElement {
    let pickingRoot = document.querySelector("#picking") as HTMLTemplateElement;
    let picker = pickingRoot.content.cloneNode(true) as HTMLElement;
    //This sets up the google input element -> on input changed -> relay a message
    (picker.querySelector("#google-input") as HTMLInputElement).oninput = (event: Event) => {
        //First draft -> google drive url needs to be validated, for now, this just accepts everything
        let url = (event.currentTarget as HTMLInputElement).value;
        dispatch({  type: "google-drive-url-changed", payload: url });
    }

    //This sets up the onclick for the "Click me to view google drive" button
    (picker.querySelector("#google-button") as HTMLButtonElement).onclick = async (event: Event) => {
        dispatch({ type: "file-picker-opened", payload: {} });
    }
    return picker;
}