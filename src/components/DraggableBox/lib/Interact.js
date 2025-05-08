import interact from "interactjs";

export default function initializeInteractDrag(boxRef, setPosition) {
  let delta = { x: 0, y: 0 };

  interact(boxRef).draggable({
    inertia: true,

    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],

    listeners: {
      move(event) {
        delta.x += event.dx;
        delta.y += event.dy;

        event.target.style.transform = `translate(${delta.x}px, ${delta.y}px)`;
      },

      end(event) {
        setPosition((prev) => ({
          x: prev.x + delta.x,
          y: prev.y + delta.y,
        }));

        delta = { x: 0, y: 0 };
      },
    },
  });

  // Cleanup interact instance
  return () => interact(boxRef).unset();
}
