import { ComponentState } from "../lib/appState";
import { ComponentMessage } from '../lib/appMessages';
import { renderViewingState } from './renderViewingState';
import { renderPickingState } from './renderPickingState';
import { renderWaitingState } from './renderWaitingState';
import { renderForbiddenState } from './renderForbiddenState';

type Dispatch = (msg: ComponentMessage) => void;
type RenderView = (state: ComponentState, dispatch: Dispatch) => HTMLElement;

function determineRenderer (state: ComponentState): RenderView {
    if (state.googleDriveFileId) {
        if (!state.googleDriveUrl) {
            return renderForbiddenState;
        }
        return renderViewingState;
    }
    if (state.currentClient.clientUuid == state.initializer.clientUuid) {
        return renderPickingState;
    }
    return renderWaitingState;
}

export function render (state: ComponentState, dispatch: Dispatch): void {
    let renderView = determineRenderer (state);

    //No need to import (and maintain) an entire component library and its customs for this small app...
    //All of the states are cleanly defined
    let rootNode = document.getElementById("root");
    var emptyNode = rootNode.cloneNode(false);
    //Clears the root node
    rootNode.parentNode.replaceChild(emptyNode, rootNode);
    //Appens the child to the root node
    emptyNode.appendChild(renderView(state, dispatch));
}