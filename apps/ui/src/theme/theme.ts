import { colors } from "./colors";
import { textSize } from "./textSize";
import { textDecorations } from "./textDecorations";
import { textTransforms } from "./textTransform";
import { whiteSpaces } from "./whiteSpace";
import { textOverflows } from "./textOverflows";

const spaces = new Array(10).fill(0).map((_, index) => index * 4);

export const theme = {
  textSize,
  textDecorations,
  textTransforms,
  whiteSpaces,
  colors,
  spaces,
  textOverflows,
};

export type ITheme = typeof theme;
