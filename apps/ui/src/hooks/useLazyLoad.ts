import { useState, useEffect, useRef, MutableRefObject } from 'react';

type PossibleRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null | undefined;

export const useLazyLoad = <T extends HTMLElement>(externalRef?: PossibleRef<T>) => {
  const internalRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const setRefs = (node: T | null) => {
    internalRef.current = node;

    if (!externalRef) return;

    if (typeof externalRef === 'function') {
      externalRef(node);
    } else {
      (externalRef as MutableRefObject<T | null>).current = node;
    }
  };

  useEffect(() => {
    if (!internalRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }, 400);
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    observer.observe(internalRef.current);

    return () => {
      if (internalRef.current) {
        observer.unobserve(internalRef.current);
      }
    };
  }, []);

  return { 
    isVisible, 
    setRefs 
  };
};
