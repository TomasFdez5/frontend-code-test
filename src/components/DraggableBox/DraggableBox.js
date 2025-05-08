import React from "react";
import { observer } from "mobx-react";
import { deselectBox, selectBox } from "../../actions/BoxActions";
import "./DraggableBox.css";
import useDraggable from "../../hooks/useDraggable";

function DraggableBox({ id, color, width, height, left, top, selected, children }) {
  const { ref, position } = useDraggable(left, top);

  const handleToggle = () => (selected ? deselectBox(id) : selectBox(id));

  return (
    <div
      id={id}
      ref={ref}
      className={`box draggable-box ${selected ? "selected" : ""}`}
      onClick={handleToggle}
      style={{
        backgroundColor: color,
        width,
        height,
        transform: `translate(${position.left}px, ${position.top}px)`,
      }}
    >
      {children}
    </div>
  );
}

export default observer(DraggableBox);
