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
import React from "react";

interface IProps {
  gap?: number;
  children?:React.ReactNode;
}
type Props = LayoutProps & PaddingProps & ColorProps & GridProps & FlexboxProps & IProps;

const Grid: React.FC<IProps> = styled(Box)<
    Props
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
