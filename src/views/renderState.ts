import { IntegrationState } from "../lib/integrationState.js";
import { IntegrationMessage } from '../lib/integrationmessages.js';
import { renderViewingStateView } from './renderViewingStateView.js';
import { renderPickingStateView } from './renderPickingStateView.js';
import { renderWaitingStateView } from './renderWaitingStateView.js';

//Poor man's react, no need to import (and maintain) the entire reactjs library and its customs for this small app...
export function render(state: IntegrationState, dispatch: ((msg: IntegrationMessage) => void)): void {
    let rootNode = document.getElementById("root");
    var emptyNode = rootNode.cloneNode(false);
    rootNode.parentNode.replaceChild(emptyNode, rootNode);
    let view: HTMLElement;
    if (state?.googleDriveUrl) {
        view = renderViewingStateView (state, dispatch);
    } else if (state.currentClient.clientUuid == state.initializer.clientUuid) {
        view = renderPickingStateView (state, dispatch);
    } else {
        view = renderWaitingStateView (state, dispatch);
    }
    console.log(view);
    emptyNode.appendChild(view);
}