import React from "react";
import {
  addBox,
  changeSelectedBoxColor,
  removeAllBoxes,
  removeLastBoxAdded,
  removeSelectedBox,
} from "../actions/BoxActions";

function Toolbar() {
  return (
    <div className="toolbar">
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeLastBoxAdded}>Remove Last Box Added</button>
      <button onClick={removeSelectedBox}>Remove Selected Box</button>
      <button onClick={removeAllBoxes}>Remove All Boxes</button>
      <input type="color" onChange={changeSelectedBoxColor} />
      <span id="boxSelectedMsg">No boxes selected</span>
    </div>
  );
}

export default Toolbar;
