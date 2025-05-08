import interact from "interactjs";

export default function initializeInteractDrag(boxRef, setPosition, getCurrentPosition) {
  let delta = { left: 0, top: 0 };

  interact(boxRef).draggable({
    inertia: true,

    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],

    listeners: {
      start() {
        const currentPosition = getCurrentPosition();
        delta.left = currentPosition.left;
        delta.top = currentPosition.top;
      },

      move(event) {
        delta.left += event.dx;
        delta.top += event.dy;

        event.target.style.transform = `translate(${delta.left}px, ${delta.top}px)`;
      },

      end(event) {
        setPosition({
          left: delta.left,
          top: delta.top,
        });

        delta = { left: 0, top: 0 };
      },
    },
  });

  return () => interact(boxRef).unset();
}
