import type { RequiredTheme, ResponsiveValue, Theme } from "styled-system";
import { variant } from "styled-system";

export const colors = {
  general100: "#0F0F0F",
  general90: "#888888",
  general80: "#B6B6B6",
  general70: "#D9D9D9",
  general60: "#EBEBEB",
  general50: "#F5F5F5",
  general40: "#F8F8F8",
  general30: "#FFFFFF",
  primary100: "#59AC4B",
  primary90: "#D5EAD2",
  red100: "#B60000",
  red90: "#F8E5E5",
  yellow100: "#FF9A03",
  yellow90: "#FFF5E6",
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
