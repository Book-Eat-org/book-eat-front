import { ComponentProps, FC, ReactNode, useCallback } from "react";
import { isNil } from "ramda";
import { useListNavigationContext } from "./context.ts";
import styled from "@emotion/styled";
import { styledCommonFn } from "$utils";

export const Wrapper = styled.div`
  ${styledCommonFn};
  overflow: auto;
  height: 100%;
`;
interface IProps extends ComponentProps<typeof Wrapper> {
  children: ReactNode;
}

const ScrollContainer: FC<IProps> = (props) => {
  const { children, ...restProps } = props;
  const { setObserver, setCurrentId, refs } = useListNavigationContext();

  const onRefInit = useCallback((element: HTMLDivElement) => {
    if (isNil(element)) {
      return;
    }

    const options = {
      rootMargin: "-20px",
      threshold: 0,
      root: element,
    };

    const observable: IntersectionObserverCallback = () => {
      const visibleEntries = Object.values(refs)
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            id: el.id,
            distance: Math.abs(
              rect.top + rect.height / 2 - (window.innerHeight - 200) / 2,
            ),
            isVisible: rect.top < window.innerHeight && rect.bottom > 0,
          };
        })
        .filter((entry) => entry.isVisible)
        .sort((a, b) => a.distance - b.distance);

      if (visibleEntries.length > 0) {
        setCurrentId?.(visibleEntries[0].id);
      }
    };
    setObserver?.(new IntersectionObserver(observable, options));
  }, []);

  return (
    <Wrapper ref={onRefInit} {...restProps}>
      {children}
    </Wrapper>
  );
};

export default ScrollContainer;
