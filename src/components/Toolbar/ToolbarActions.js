import React from "react";
import { observer } from "mobx-react-lite";
import store from "../../stores/MainStore";
import {
  addBox,
  removeAllBoxes,
  changeAllSelectedBoxesColor,
  removeAllSelectedBoxes,
  deselectAllBoxes,
} from "../../actions/BoxActions";
import { clearHistory, redo, undo } from "../../actions/HistoricalActions";

const ToolbarActions = observer(() => (
  <div className="toolbar-actions">
    <button onClick={addBox}>Add Box</button>
    {store.boxes.length > 0 && <button onClick={removeAllBoxes}>Remove All</button>}
    <button onClick={undo}>Undo</button>
    <button onClick={redo}>Redo</button>
    <button onClick={clearHistory}>Clear History</button>
    <input type="color" onChange={changeAllSelectedBoxesColor} aria-label="Color Picker" />

    {store.selectedBoxesCount > 0 && (
      <>
        <button onClick={removeAllSelectedBoxes}>
          Remove Selected Box{store.selectedBoxesCount > 1 ? "es" : ""}
        </button>
        <button onClick={deselectAllBoxes}>Deselect All</button>
      </>
    )}
  </div>
));

export default ToolbarActions;
