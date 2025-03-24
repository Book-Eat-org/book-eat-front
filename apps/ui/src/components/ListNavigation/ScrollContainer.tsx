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
  const { setObserver, setCurrentId } = useListNavigationContext();

  const onRefInit = useCallback((element: HTMLDivElement) => {
    if (isNil(element)) {
      return;
    }

    const options = {
      rootMargin: "-20px",
      threshold: 0,
      root: element,
    };

    const observable: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          setCurrentId?.(entry.target.id);
        }
      });
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
