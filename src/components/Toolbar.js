import React from "react";
import { observer } from "mobx-react-lite";
import {
  addBox,
  changeAllSelectedBoxesColor,
  deselectAllBoxes,
  removeAllBoxes,
  removeLastBoxAdded,
  removeAllSelectedBoxes,
} from "../actions/BoxActions";
import store from "../stores/MainStore";
import { clearHistory, redo, undo } from "../actions/HistoricalActions";

function Toolbar() {
  return (
    <div className="toolbar">
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeLastBoxAdded}>Remove Last Box Added</button>
      <button onClick={removeAllSelectedBoxes}>Remove Selected Box</button>
      <button onClick={removeAllBoxes}>Remove All Boxes</button>
      <button onClick={undo}>[ Undo ]</button>
      <button onClick={redo}>[ Redo ]</button>
      <button onClick={clearHistory}>[ Clear history ]</button>
      {store.selectedBoxesCount > 0 && (
        <>
          <button onClick={deselectAllBoxes}>Deselect all boxes</button>
          <span>Double click to desect one box</span>
        </>
      )}
      <input type="color" onChange={changeAllSelectedBoxesColor} />
      <span id="boxSelectedMsg">No boxes selected</span>
      <span>{`Counter: ${store.selectedBoxesCount}`}</span>
    </div>
  );
}

export default observer(Toolbar);
