import { useEffect, useState } from "react";

const useCounter = (target, start = 0, duration = 1000) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(
        start + Math.round((target - start) * (progress / duration)),
        target
      );
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, start, duration]);

  return count;
};
export default useCounter;
