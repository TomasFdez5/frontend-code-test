import interact from "interactjs";
import { changeSelectedBoxesPosition } from "../../../actions/BoxActions";

export default function initializeInteractDrag(boxRef, id, left, top) {
  const interactInstance = interact(boxRef.current).draggable({
    inertia: true,

    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],

    listeners: {
      move(event) {
        changeSelectedBoxesPosition(event.dx, event.dy);
      },
    },
  });

  return () => interactInstance.unset();
}
