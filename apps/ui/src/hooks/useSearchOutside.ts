import { useRef, useEffect } from 'react';

export const useSearchOutside = (
  isActive: boolean, 
  callback: () => void
) => {
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isCard = Boolean(target.closest('[data-card]'));
      const isOutsideSearch = searchRef.current && !searchRef.current.contains(target);
      
      if (isOutsideSearch && !isCard) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isActive, callback]);

  return { searchRef };
};
