import { useEffect, useRef, useState } from "react";
import initializeInteractDrag from "../components/DraggableBox/lib/Interact";

export default function useDraggable(initialX, initialY) {
  const boxRef = useRef(null);
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  useEffect(() => {
    if (boxRef.current) {
      const cleanup = initializeInteractDrag(boxRef.current, setPosition);
      return cleanup;
    }
  }, []);

  return { ref: boxRef, position };
}
