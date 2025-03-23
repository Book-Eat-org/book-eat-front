import { css } from "@emotion/react";
import { RequiredTheme, ResponsiveValue, Theme, variant } from "styled-system";

export const textTransforms = {
  uppercase: css`
    text-transform: uppercase;
  `,
  lowercase: css`
    text-transform: lowercase;
  `,
  capitalize: css`
    text-transform: capitalize;
  `,
  none: css`
    text-transform: none;
  `,
  inherit: css`
    text-transform: inherit;
  `,
  initial: css`
    text-transform: initial;
  `,
  revert: css`
    text-transform: revert;
  `,
  unset: css`
    text-transform: unset;
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
