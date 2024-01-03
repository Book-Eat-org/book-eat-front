import styled from "@emotion/styled";
import {
  color,
  fontSize,
  space,
  width,
  padding,
  flex,
  flexbox,
  FlexProps,
  FlexboxProps,
  LayoutProps,
  PaddingProps,
  grid,
  layout,
} from "styled-system";

interface IProps {
  gap?: number;
}

const Flex = styled.div<
  LayoutProps & PaddingProps & FlexProps & IProps & FlexboxProps
>`
  ${space}
  ${layout}
  ${fontSize}
  ${color}
  ${padding}
  ${flex}
  ${grid}
  ${flexbox}
  display:flex;
  gap: ${({ gap }) => (gap ? `${gap * 4}px` : undefined)};
`;

export default Flex;
