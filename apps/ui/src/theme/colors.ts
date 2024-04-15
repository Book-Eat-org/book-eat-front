import type { RequiredTheme, ResponsiveValue, Theme } from "styled-system";
import { variant } from "styled-system";

export const colors = {
  primary: "#BAE48F",
  primaryLight: "#DBF5C0",
  primaryDark: "#87B15C",
  black: "#282828",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  grayLight: "#EBEBEB",
  red: "#B60000",
  blue: "#0113AF",
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
