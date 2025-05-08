import React from "react";
import { observer } from "mobx-react-lite";
import {
  addBox,
  changeSelectedBoxesColor,
  deselectAllBoxes,
  removeAllBoxes,
  removeLastBoxAdded,
  removeSelectedBoxes,
} from "../actions/BoxActions";
import store from "../stores/MainStore";

function Toolbar() {
  return (
    <div className="toolbar">
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeLastBoxAdded}>Remove Last Box Added</button>
      <button onClick={removeSelectedBoxes}>Remove Selected Box</button>
      <button onClick={removeAllBoxes}>Remove All Boxes</button>
      {store.selectedBoxesCount > 0 && (
        <>
          <button onClick={deselectAllBoxes}>Deselect all boxes</button>
          <span>Double click to desect one box</span>
        </>
      )}
      <input type="color" onChange={changeSelectedBoxesColor} />
      <span id="boxSelectedMsg">No boxes selected</span>
      <span>{`Counter: ${store.selectedBoxesCount}`}</span>
    </div>
  );
}

export default observer(Toolbar);
