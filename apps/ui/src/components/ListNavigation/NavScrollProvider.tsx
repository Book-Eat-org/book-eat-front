import { FC, createContext, useContext, useRef, useCallback } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
  height: 34px;
  overflow-x: auto;
  touch-action: pan-x;

  & > * {
    white-space: nowrap;
    transition: all 0.2s linear;
    word-break: normal;
    word-wrap: normal;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export interface ScrollContext {
  scrollToId: (id: string) => void;
}

const NavScrollContext = createContext<ScrollContext>({
  scrollToId: () => {},
});

export interface IProps {
  children: React.ReactNode;
}

export const NavScrollProvider: FC<IProps> = (props) => {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);

  const scrollToId = useCallback((id: string) => {
    const container = ref.current;
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
    <NavScrollContext.Provider value={{ scrollToId }}>
      <Wrapper ref={ref}>
        {children}
      </Wrapper>
    </NavScrollContext.Provider>
  );
};

export const useNavScroll = () => useContext(NavScrollContext);
