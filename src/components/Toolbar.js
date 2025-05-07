import React from "react";
import { addBox, removeAllBoxes, removeBox } from "../actions/BoxActions";

function Toolbar() {
  return (
    <div className="toolbar">
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeBox}>Remove Box</button>
      <button onClick={removeAllBoxes}>Remove All Boxes</button>
      <input type="color" />
      <span>No boxes selected</span>
    </div>
  );
}

export default Toolbar;
