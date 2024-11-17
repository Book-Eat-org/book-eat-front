import {
  TextDecorationsProps,
  textDecorationsStyleFn,
  TextSizeProps,
  textSizeStyleFn,
  TextTransformProps,
  textTransformsStyleFn,
  WhiteSpaceProps,
  whiteSpacesStyleFn,
  TextOverflowsProps,
  textOverflowsStyleFn,
} from "$theme";
import styled from "@emotion/styled";
import {
  color,
  ColorProps,
  overflow,
  OverflowProps,
  padding,
  PaddingProps,
  typography,
  TypographyProps,
} from "styled-system";

const Typography = styled.span<
  ColorProps &
    TypographyProps &
    TextSizeProps &
    TextDecorationsProps &
    TextTransformProps &
    PaddingProps &
    WhiteSpaceProps &
    TextOverflowsProps &
    OverflowProps
>`
  ${color}
  ${typography}
  ${padding}
  ${whiteSpacesStyleFn}
  ${textSizeStyleFn}
  ${textDecorationsStyleFn}
  ${textTransformsStyleFn}
  ${textOverflowsStyleFn}
  ${overflow}
`;

export default Typography;
