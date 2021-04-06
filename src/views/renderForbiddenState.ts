import { ComponentState } from "../lib/appState";
import { ComponentMessage } from '../lib/appMessages';

//Renders the viewing state
export function renderForbiddenState (state: ComponentState, dispatch: ((msg: ComponentMessage) => any)): HTMLElement {
    let forbiddenRoot = document.querySelector("#forbidden") as HTMLTemplateElement;
    let forbidden = forbiddenRoot.content.cloneNode(true) as HTMLElement;
    //For now, just return the forbidden template
    return forbidden;
}