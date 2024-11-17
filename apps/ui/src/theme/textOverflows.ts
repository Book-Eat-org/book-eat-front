import { css } from "@emotion/react";
import { RequiredTheme, ResponsiveValue, Theme, variant } from "styled-system";

export const textOverflows = {
  ellipsis: css`
    text-overflow: ellipsis;
  `,
};

export interface TextOverflowsProps<ThemeType extends Theme = RequiredTheme> {
  textOverflow?:
    | ResponsiveValue<keyof typeof textOverflows, ThemeType>
    | undefined;
}

export const textOverflowsStyleFn = variant({
  /** Свойство компонента */
  prop: "textOverflow",
  /** Свойство темы*/
  key: "textOverflows",
});
