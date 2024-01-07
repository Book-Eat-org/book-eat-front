import {
  background,
  borderRadius,
  borders,
  color,
  compose,
  fontSize,
  layout,
  margin,
  opacity,
  padding,
  space,
  width,
} from "styled-system";

export const styledCommonFn = compose(
  space,
  width,
  layout,
  fontSize,
  color,
  padding,
  margin,
  background,
  opacity,
  borders,
  borderRadius,
);
