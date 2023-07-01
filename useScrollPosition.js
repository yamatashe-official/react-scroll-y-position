import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // const updatePos = () => {
  //   setScrollPosition(window.scrollY);
  // };

  useEffect(() => {
    const updatePos = (prevScroll) => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePos);
    updatePos();

    return () => {
      window.removeEventListener("scroll", updatePos);
    };
  }, [scrollPosition]);

  return scrollPosition;
};
