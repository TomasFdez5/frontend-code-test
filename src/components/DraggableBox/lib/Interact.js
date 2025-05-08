import interact from "interactjs";
import { changeSelectedBoxesPosition, selectBox } from "../../../actions/BoxActions";
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
          const id = boxRef.current.id;
          const box = store.boxes.find((b) => b.id === id);
          if (!box.selected) {
            store.selectBox(id);
          }
        },
        move(event) {
          changeSelectedBoxesPosition(event.dx, event.dy);
        },
      },
    })
    .on("tap", (event) => {
      const id = boxRef.current.id;
      const box = store.boxes.find((b) => b.id === id);
      if (!box.selected) {
        selectBox(boxRef.current.id);
      }
    })
    .on("doubletap", (event) => {
      const id = boxRef.current.id;
      const box = store.boxes.find((b) => b.id === id);
      if (box.selected) {
        selectBox(boxRef.current.id);
      }
    });

  return () => interactInstance.unset();
}
