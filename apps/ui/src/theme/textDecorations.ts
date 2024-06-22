import { css } from "@emotion/react";
import { RequiredTheme, ResponsiveValue, Theme, variant } from "styled-system";

export const textDecorations = {
  blink: css`
    text-decoration: blink;
  `,
  "line-through": css`
    text-decoration: line-through;
  `,
  overline: css`
    text-decoration: overline;
  `,
  underline: css`
    text-decoration: underline;
  `,
};

export interface TextDecorationsProps<ThemeType extends Theme = RequiredTheme> {
  textDecoration?:
    | ResponsiveValue<keyof typeof textDecorations, ThemeType>
    | undefined;
}

export const textDecorationsStyleFn = variant({
  /** Свойство компонента */
  prop: "textDecoration",
  /** Свойство темы*/
  key: "textDecorations",
});
