import { ComponentState } from "../lib/integrationState.js";
import { ComponentMessage } from '../lib/integrationmessages.js';
import { renderViewingState } from './renderViewingState.js';
import { renderPickingState } from './renderPickingState.js';
import { renderWaitingState } from './renderWaitingState.js';

type Dispatch = (msg: ComponentMessage) => void;
type RenderView = (state: ComponentState, dispatch: Dispatch) => HTMLElement;

export function render (state: ComponentState, dispatch: Dispatch): void {
    let renderView: RenderView;
    if (state?.googleDriveUrl) {
        renderView = renderViewingState;
    } else if (state.currentClient.clientUuid == state.initializer.clientUuid) {
        renderView = renderPickingState;
    } else {
        renderView = renderWaitingState;
    }

    //No need to import (and maintain) an entire component library and its customs for this small app...
    //All of the states are cleanly defined
    let rootNode = document.getElementById("root");
    var emptyNode = rootNode.cloneNode(false);
    //Clears the root node
    rootNode.parentNode.replaceChild(emptyNode, rootNode);
    //Appens the child to the root node
    emptyNode.appendChild(renderView(state, dispatch));
}