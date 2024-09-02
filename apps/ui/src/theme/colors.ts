import type { RequiredTheme, ResponsiveValue, Theme } from "styled-system";
import { variant } from "styled-system";

export const colors = {
  accent50: "#D7ECD4",
  accent100: "#CAE6C5",
  accent200: "#B8DDB2",
  accent300: "#A1D298",
  accent400: "#81C376",
  accent500: "#59AC4B",
  accent600: "#4C9240",
  accent700: "#417C36",
  accent800: "#376A2E",
  accent900: "#2F5A27",

  red50: "#FEDBDB",
  red100: "#FF9797",
  red200: "#FF7575",
  red300: "#FF4747",
  red400: "#FF0909",
  red500: "#B60000",
  red600: "#9B0000",
  red700: "#840000",
  red800: "#700000",
  red900: "#5F0000",

  yellow50: "#FFE7C3",
  yellow100: "#FFDFAF",
  yellow200: "#FFD495",
  yellow300: "#FFC671",
  yellow400: "#FFB342",
  yellow500: "#FF9A03",
  yellow600: "#DB8400",
  yellow700: "#BA7000",
  yellow800: "#9E5F00",
  yellow900: "#875100",

  general50: "#FFFFFF",
  general100: "#F8F8F8",
  general200: "#F5F5F5",
  general300: "#EBEBEB",
  general400: "#D9D9D9",
  general500: "#B6B6B6",
  general600: "#888888",
  general700: "#676767",
  general800: "#4C4C4C",
  general900: "#0F0F0F",
};

export interface ColorProps<ThemeType extends Theme = RequiredTheme> {
  color?: ResponsiveValue<keyof typeof colors, ThemeType> | undefined;
}

export const colorsStyleFn = variant({
  /** Свойство компонента */
  prop: "color",
  /** Свойство темы*/
  key: "color",
});
