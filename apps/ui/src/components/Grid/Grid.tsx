import styled from "@emotion/styled";
import {
  color,
  fontSize,
  space,
  width,
  padding,
  flex,
  GridProps,
  LayoutProps,
  PaddingProps,
  grid,
  layout,
  FlexboxProps,
  flexbox,
  ColorProps,
} from "styled-system";
import Box from "../Box";

interface IProps {
  gap?: number;
}
const Grid = styled(Box)<
  LayoutProps & PaddingProps & ColorProps & GridProps & FlexboxProps & IProps
>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${padding}
  ${layout}
  ${flex}
  ${grid}
  ${flexbox}
  display:grid;
  gap: ${({ gap }) => (gap ? `${gap * 5}px` : undefined)};
`;

export default Grid;
