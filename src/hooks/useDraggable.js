import { useEffect, useRef, useState } from "react";
import initializeInteractDrag from "../components/DraggableBox/lib/Interact";
import { changeBoxPosition } from "../actions/BoxActions";
import store from "../stores/MainStore";

export default function useDraggable(initialLeft, initialTop, boxId) {
  const boxRef = useRef(null);
  const [position, setPosition] = useState({ left: initialLeft, top: initialTop });

  useEffect(() => {
    const box = store.boxes.find((box) => box.id === boxId);
    if (box) {
      setPosition({ left: box.left, top: box.top });
    }
  }, [boxId]);

  useEffect(() => {
    if (boxRef.current) {
      const cleanup = initializeInteractDrag(
        boxRef.current,
        (newPosition) => {
          setPosition(newPosition);
          changeBoxPosition(boxId, newPosition.left, newPosition.top);
        },
        () => position
      );

      return cleanup;
    }
  }, [position, boxId]);

  return { ref: boxRef, position };
}
