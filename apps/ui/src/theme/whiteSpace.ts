import { css } from "@emotion/react";
import { RequiredTheme, ResponsiveValue, Theme, variant } from "styled-system";

export const whiteSpaces = {
  nowrap: css`
    white-space: nowrap;
  `,
  breakSpaces: css`
    white-space: break-spaces;
  `,
  collapse: css`
    white-space: collapse;
  `,
  pre: css`
    white-space: pre;
  `,
};

export interface WhiteSpaceProps<ThemeType extends Theme = RequiredTheme> {
  whiteSpace?: ResponsiveValue<keyof typeof whiteSpaces, ThemeType> | undefined;
}

export const whiteSpacesStyleFn = variant({
  /** Свойство компонента */
  prop: "whiteSpace",
  /** Свойство темы*/
  key: "whiteSpaces",
});
