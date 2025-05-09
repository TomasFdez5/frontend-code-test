import React from "react";
import { observer } from "mobx-react-lite";
import store from "../../stores/MainStore";

const ToolbarInfo = observer(() => (
  <div className="toolbar-info">
    {store.selectedBoxesCount > 0 ? (
      <section>
        <p>
          <span role="img" aria-label="Target emoji">
            🎯
          </span>{" "}
          {store.selectedBoxesCount} box{store.selectedBoxesCount > 1 ? "es" : ""} selected
        </p>
        <p>
          <span role="img" aria-label="Lightbulb emoji">
            💡
          </span>{" "}
          Double-click a box to deselect it
        </p>
        <p>
          <span role="img" aria-label="Lightbulb emoji">
            💡
          </span>{" "}
          Hold <strong>Ctrl</strong> (or <strong>Cmd (⌘)</strong> on Mac) to select multiple boxes
        </p>
      </section>
    ) : (
      <section>
        <p>No boxes selected</p>
      </section>
    )}
  </div>
));

export default ToolbarInfo;
