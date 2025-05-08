import React from "react";
import { observer } from "mobx-react";
import { deselectBox, selectBox } from "../../actions/BoxActions";
import "./DraggableBox.css";
import useDraggable from "../../hooks/useDraggable";
import store from "../../stores/MainStore";

function DraggableBox({ id, color, width, height, left, top, selected, children }) {
  const { ref, position } = useDraggable(left, top, id);

  const handleBoxClick = (boxId) => {
    const boxSelected = store.boxes.find((box) => box.id === boxId).selected;
    if (boxSelected) {
      deselectBox(boxId);
    } else {
      selectBox(boxId);
    }
  };

  return (
    <div
      id={id}
      ref={ref}
      className={`box draggable-box ${selected ? "selected" : ""}`}
      onClick={() => handleBoxClick(id)}
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
