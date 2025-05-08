import interact from "interactjs";
import { changeSelectedBoxesPosition, selectBox } from "../../../actions/BoxActions";

let isHandlingTapFlag = false;

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
        move(event) {
          changeSelectedBoxesPosition(event.dx, event.dy);
        },
      },
    })
    .on("tap", (event) => {
      if (isHandlingTapFlag) return;

      isHandlingTapFlag = true;

      // wait for the end of the tap event
      requestAnimationFrame(() => {
        selectBox(boxRef.current.id);

        isHandlingTapFlag = false;
      });
    });

  return () => interactInstance.unset();
}
