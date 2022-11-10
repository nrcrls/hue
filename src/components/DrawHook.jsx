import { useRef } from "react";


function useOnDraw() {
  const canvasRef = useRef(null);

  function setCanvasRef(ref) {
    if (!ref) return;
    canvasRef.current = ref;
  }

  return (
    <></>
  );
}

export default useOnDraw;
