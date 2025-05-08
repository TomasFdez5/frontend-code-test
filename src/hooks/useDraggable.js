import { useEffect, useRef, useState } from "react";
import initializeInteractDrag from "../components/DraggableBox/lib/Interact";

export default function useDraggable(initialLeft, initialTop) {
  const boxRef = useRef(null);
  const [position, setPosition] = useState({ left: initialLeft, top: initialTop });

  useEffect(() => {
    if (boxRef.current) {
      const cleanup = initializeInteractDrag(boxRef.current, setPosition, () => position);
      return cleanup;
    }
  }, [position]);

  return { ref: boxRef, position };
}
