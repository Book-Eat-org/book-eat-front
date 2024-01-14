import { colors } from "./colors";
import { textSize } from "./textSize";

const spaces = new Array(10).fill(0).map((_, index) => index * 4);

export const theme = {
  textSize,
  colors,
  spaces,
};

export type ITheme = typeof theme;
