import { useState, useEffect, useRef } from 'react';

export const useAnimation = (isActive: boolean) => {
  const [shouldRender, setShouldRender] = useState(isActive);
  const [isOpen, setIsOpen] = useState(isActive);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isActive) {
      setShouldRender(true);
      clearTimeout(timeoutRef.current);
      
      const rafId = requestAnimationFrame(() => {
        timeoutRef.current = setTimeout(() => {
          setIsOpen(true);
        }, 50);
      });
      
      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timeoutRef.current);
      };
    } else {
      setIsOpen(false);
      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
      }, 350);
      
      return () => {
        clearTimeout(timeoutRef.current);
      };
    }
  }, [isActive]);

  return { 
    shouldRender, 
    isOpen 
  };
};
