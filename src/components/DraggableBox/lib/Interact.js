import interact from "interactjs";
import {
  changeAllSelectedBoxesPosition,
  changeBoxPosition,
  selectBox,
} from "../../../actions/BoxActions";
import store from "../../../stores/MainStore";

export default function initializeInteractDrag(boxRef) {
  const interactInstance = interact(boxRef.current)
    .draggable({
      inertia: true,

      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
          endOnly: true,
        }),
      ],

      listeners: {
        start(event) {
          store.historyManager.startGroup(() => {});
        },
        move(event) {
          if (store.selectedBoxesCount > 1) {
            changeAllSelectedBoxesPosition(event.dx, event.dy);
          } else {
            changeBoxPosition(boxRef.current.id, event.dx, event.dy);
          }
        },
        end(event) {
          store.historyManager.stopGroup(() => {});
        },
      },
    })
    .on("tap", (event) => {
      const id = boxRef.current.id;
      const box = store.boxes.find((b) => b.id === id);
      if (!box.selected) {
        selectBox(boxRef.current.id, event);
      }
    })
    .on("doubletap", (event) => {
      const id = boxRef.current.id;
      const box = store.boxes.find((b) => b.id === id);
      if (box.selected) {
        selectBox(boxRef.current.id, event);
      }
    });

  return () => interactInstance.unset();
}
