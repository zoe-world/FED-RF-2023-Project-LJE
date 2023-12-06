import { useCallback, useEffect, useRef, useState } from "react";

// hover 시 상태값
const useHover = () => {
  const [isAct, setIsAct] = useState(false);
  const ref = useRef();

  const handleMouseOver = useCallback(() => {
    setIsAct(1);
    }, []);
  const handleMouseOut = useCallback(() => setIsAct(0), []);

  useEffect(() => {
    const ele = ref.current;
    if (!ele) return;
    ele.addEventListener("mouseover", handleMouseOver);
    ele.addEventListener("mouseout", handleMouseOut);

    return () => {
      ele.removeEventListener("mouseover", handleMouseOver);
      ele.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref, handleMouseOver, handleMouseOut]);

  return [ref, isAct];
};
export default useHover;
