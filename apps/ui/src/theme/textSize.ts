import { css } from "@emotion/react";
import { RequiredTheme, ResponsiveValue, Theme, variant } from "styled-system";

export const textSize = {
  "26/26": css`
    font-size: 26px;
    line-height: 26px;
  `,
  "24/24": css`
    font-size: 24px;
    line-height: 24px;
  `,
  "18/18": css`
    font-size: 18px;
    line-height: 18px;
  `,
  "16/16": css`
    font-size: 16px;
    line-height: 16px;
  `,
  "14/14": css`
    font-size: 14px;
    line-height: 14px;
  `,
  "12/12": css`
    font-size: 12px;
    line-height: 12px;
  `,
};

export interface TextSizeProps<ThemeType extends Theme = RequiredTheme> {
  size?: ResponsiveValue<keyof typeof textSize, ThemeType> | undefined;
}

export const textSizeStyleFn = variant({
  /** Свойство компонента */
  prop: "size",
  /** Свойство темы*/
  key: "textSize",
});
