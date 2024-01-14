import { TextSizeProps, textSizeStyleFn } from "$theme";
import styled from "@emotion/styled";
import { color, ColorProps, typography, TypographyProps } from "styled-system";

const Typography = styled.span<ColorProps & TypographyProps & TextSizeProps>`
  ${color}
  ${typography}
  ${textSizeStyleFn}
`;

export default Typography;
