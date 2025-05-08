import React from "react";
import { observer } from "mobx-react";
import DraggableBox from "./DraggableBox/DraggableBox";

function Box(props) {
  return (
    <DraggableBox {...props}>
      <div>{props.id}</div>
    </DraggableBox>
  );
}

export default observer(Box);
