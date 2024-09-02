import { css } from "@emotion/react";
import { RequiredTheme, ResponsiveValue, Theme, variant } from "styled-system";

export const textTransforms = {
  uppercase: css`
    text-transform: uppercase;
  `,
};

export interface TextTransformProps<ThemeType extends Theme = RequiredTheme> {
  textTransform?:
    | ResponsiveValue<keyof typeof textTransforms, ThemeType>
    | undefined;
}

export const textTransformsStyleFn = variant({
  /** Свойство компонента */
  prop: "textTransform",
  /** Свойство темы*/
  key: "textTransforms",
});
