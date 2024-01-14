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
  boxShadow,
} from "styled-system";
import { colorsStyleFn, textSizeStyleFn } from "$theme";

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
  boxShadow,
  colorsStyleFn,
  textSizeStyleFn,
);
