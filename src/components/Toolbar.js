import React from "react";
import { observer } from "mobx-react-lite";
import {
  addBox,
  changeAllSelectedBoxesColor,
  deselectAllBoxes,
  removeAllBoxes,
  removeAllSelectedBoxes,
} from "../actions/BoxActions";
import store from "../stores/MainStore";
import { clearHistory, redo, undo } from "../actions/HistoricalActions";

function Toolbar() {
  return (
    <div className="toolbar">
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeAllBoxes}>Remove All</button>
      <button onClick={undo}>[ Undo ]</button>
      <button onClick={redo}>[ Redo ]</button>
      <button onClick={clearHistory}>[ Clear History ]</button>
      <input type="color" onChange={changeAllSelectedBoxesColor} aria-label="Color Picker" />

      {store.selectedBoxesCount > 0 && (
        <>
          <button onClick={removeAllSelectedBoxes}>
            Remove {store.selectedBoxesCount > 1 ? "Selected Boxes" : "Selected Box"}
          </button>
          <button onClick={deselectAllBoxes}>Deselect All</button>
          <span>Double-click to deselect a box</span>
        </>
      )}

      <span id="boxSelectedMsg">
        {store.selectedBoxesCount > 0
          ? `Selected ${store.selectedBoxesCount} box${store.selectedBoxesCount > 1 ? "es" : ""}`
          : "No boxes selected"}
      </span>

      <span>{`Counter: ${store.selectedBoxesCount}`}</span>
    </div>
  );
}

export default observer(Toolbar);
