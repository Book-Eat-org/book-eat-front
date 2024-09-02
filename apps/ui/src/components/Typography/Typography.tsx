import {
  TextDecorationsProps,
  textDecorationsStyleFn,
  TextSizeProps,
  textSizeStyleFn,
  TextTransformProps,
  textTransformsStyleFn,
} from "$theme";
import styled from "@emotion/styled";
import { color, ColorProps, typography, TypographyProps } from "styled-system";

const Typography = styled.span<
  ColorProps &
    TypographyProps &
    TextSizeProps &
    TextDecorationsProps &
    TextTransformProps
>`
  ${color}
  ${typography}
  ${textSizeStyleFn}
  ${textDecorationsStyleFn}
  ${textTransformsStyleFn}
`;

export default Typography;
