
import { useEffect, useState } from "react";

export const useFadeIn = (delay = 200) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return {
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0px)" : "translateY(20px)",
      transition: "all 0.6s ease-in-out",
    },
  };
};
