import { ComponentProps, FC, ReactNode, useCallback, useEffect } from "react";
import { isNil } from "ramda";
import { useListNavigationContext } from "./context.ts";
import styled from "@emotion/styled";
import { styledCommonFn } from "$utils";

export const Wrapper = styled.div`
  ${styledCommonFn};
  overflow: auto;
  height: 100%;
  scroll-behavior: smooth;
`;

interface IProps extends ComponentProps<typeof Wrapper> {
  children: ReactNode;
}

const ScrollContainer: FC<IProps> = (props) => {
  const { children, ...restProps } = props;
  const { setObserver, setCurrentId, refs, scrollToId, currentId } = useListNavigationContext();

  useEffect(() => {
    if (scrollToId && refs[scrollToId]) {
      refs[scrollToId].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
  }, [scrollToId, refs]);

  const onRefInit = useCallback((element: HTMLDivElement) => {
    if (isNil(element)) {
      return;
    }

    const options = {
      rootMargin: "-20px",
      threshold: 0.1,
      root: element,
    };

    const observable: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => ({
          id: entry.target.id,
          distance: Math.abs(
            entry.boundingClientRect.top + 
            entry.boundingClientRect.height / 2 - 
            (window.innerHeight - 200) / 2
          )
        }))
        .sort((a, b) => a.distance - b.distance);
    
      if (visibleEntries.length > 0 && visibleEntries[0].id !== currentId) {
        setCurrentId?.(visibleEntries[0].id);
      }
    };
    setObserver?.(new IntersectionObserver(observable, options));
  }, [refs, setCurrentId, setObserver]);

  return (
    <Wrapper ref={onRefInit} {...restProps}>
      {children}
    </Wrapper>
  );
};

export default ScrollContainer;
