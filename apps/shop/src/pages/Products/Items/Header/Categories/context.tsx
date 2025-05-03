import { FC, createContext, useContext, useRef, useCallback } from "react";

interface ScrollContext {
  scrollToId: (id: string) => void;
}

const ScrollContext = createContext<ScrollContext>({
  scrollToId: () => {},
});

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollProvider: FC<IProps> = (props) => {
  const { children, className } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToId = useCallback((id: string) => {
    const container = containerRef.current;
    if (!container) return;

    const element = container.querySelector(`[data-id="${id}"]`);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const offset = rect.left - containerRect.left;

    container.scrollTo({
      left: container.scrollLeft + offset,
      behavior: 'smooth'
    });
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollToId }}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
