import React from "react";
import { observer } from "mobx-react-lite";
import {
  addBox,
  changeSelectedBoxesColor,
  removeAllBoxes,
  removeLastBoxAdded,
  removeSelectedBoxes,
} from "../actions/BoxActions";
import store from "../stores/MainStore";

function Toolbar() {
  const selectedCount = store.boxes.filter((box) => box.selected).length;

  return (
    <div className="toolbar">
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeLastBoxAdded}>Remove Last Box Added</button>
      <button onClick={removeSelectedBoxes}>Remove Selected Box</button>
      <button onClick={removeAllBoxes}>Remove All Boxes</button>
      <input type="color" onChange={changeSelectedBoxesColor} />
      <span id="boxSelectedMsg">No boxes selected</span>
      <span>{`Counter: ${selectedCount}`}</span>
    </div>
  );
}

export default observer(Toolbar);
