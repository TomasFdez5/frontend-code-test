import React from "react";
import { observer } from "mobx-react";
import { deselectBox, selectBox } from "../../actions/BoxActions";
import "./DraggableBox.css";

function DraggableBox(props) {
  const { id, color, width, height, left, top, selected, children } = props;

  const handleToggle = () => (selected ? deselectBox(id) : selectBox(id));

  return (
    <div
      id={id}
      className={`box draggable-box ${selected ? "selected" : ""}`}
      onClick={handleToggle}
      style={{
        backgroundColor: color,
        width,
        height,
        transform: `translate(${left}px, ${top}px)`,
      }}
    >
      {children}
    </div>
  );
}

export default observer(DraggableBox);
