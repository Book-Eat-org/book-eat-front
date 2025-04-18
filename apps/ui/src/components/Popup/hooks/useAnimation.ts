import { useState, useEffect } from "react";

export const useAnimation = (isActive: boolean) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(true);
    }
  }, [isActive]);

  const handleAnimationEnd = () => {
    if (!isActive) {
      setIsVisible(false);
    }
    setIsAnimating(false);
  };

  return { isAnimating, isVisible, handleAnimationEnd };
};
