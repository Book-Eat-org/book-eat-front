import {
  TextDecorationsProps,
  textDecorationsStyleFn,
  TextSizeProps,
  textSizeStyleFn,
  TextTransformProps,
  textTransformsStyleFn,
  WhiteSpaceProps,
  whiteSpacesStyleFn,
} from "$theme";
import styled from "@emotion/styled";
import {
  color,
  ColorProps,
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
    WhiteSpaceProps
>`
  ${color}
  ${typography}
  ${padding}
  ${whiteSpacesStyleFn}
  ${textSizeStyleFn}
  ${textDecorationsStyleFn}
  ${textTransformsStyleFn}
`;

export default Typography;
