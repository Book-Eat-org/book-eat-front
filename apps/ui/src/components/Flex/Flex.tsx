import styled from "@emotion/styled";
import {
  color,
  fontSize,
  space,
  width,
  padding,
  LayoutProps,
  PaddingProps,
  layout,
} from "styled-system";

interface IProps {
  gap?: number;
}

const Flex = styled.div<LayoutProps & PaddingProps & IProps>`
  ${space}
  ${layout}
  ${fontSize}
  ${color}
  ${width}
  ${padding}
  display:flex;
  gap: ${({ gap }) => (gap ? `${gap * 4}px` : undefined)};
`;

export default Flex;
