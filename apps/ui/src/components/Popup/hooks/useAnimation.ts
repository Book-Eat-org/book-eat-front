import { useState, useEffect, useRef } from 'react';

export const useAnimation = (isActive: boolean) => {
  const [shouldRender, setShouldRender] = useState(isActive);
  const [isOpen, setIsOpen] = useState(isActive);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isActive) {
      setShouldRender(true);
      clearTimeout(timeoutRef.current);
      
      timeoutRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 10);
    } else {
      setIsOpen(false);
      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isActive]);

  return { 
    shouldRender, 
    isOpen 
  };
};
