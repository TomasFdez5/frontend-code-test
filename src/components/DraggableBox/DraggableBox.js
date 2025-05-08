import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { selectBox } from "../../actions/BoxActions";
import "./DraggableBox.css";
import initializeInteractDrag from "./lib/Interact";

function DraggableBox(props) {
  const boxRef = useRef(null);

  useEffect(() => {
    initializeInteractDrag(boxRef);
  }, [props]);

  return (
    <div
      id={props.id}
      ref={boxRef}
      className={`box draggable-box ${props.selected ? "selected" : ""}`}
      onMouseDown={() => selectBox(props.id)}
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
        transform: `translate(${props.left}px, ${props.top}px)`,
      }}
    >
      {props.children}
    </div>
  );
}

export default observer(DraggableBox);
