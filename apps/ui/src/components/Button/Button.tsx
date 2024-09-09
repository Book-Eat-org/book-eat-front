import styled from "@emotion/styled";
import { SerializedStyles, css } from "@emotion/react";
import { theme } from "$theme";
import { styledCommonFn } from "$utils";

interface IProps {
  variant?: "primary" | "danger";
  disabled?: boolean;
  loading?: boolean;
  size?: "lg" | "md" | "sm";
}

const disabledCss = css`
  background-color: ${theme.colors.general500};
  color: ${theme.colors.general50};
`;

const loadingCss = css`
  background-color: ${theme.colors.red100};
  color: ${theme.colors.general50};
`;

const cssByVariants: Record<
  NonNullable<IProps["variant"]>,
  SerializedStyles
> = {
  primary: css`
    background-color: ${theme.colors.accent500};
    color: ${theme.colors.general50};
  `,
  danger: css`
    background-color: ${theme.colors.red100};
    color: ${theme.colors.general50};
  `,
};

const sizesProps: Record<NonNullable<IProps["size"]>, SerializedStyles> = {
  lg: css({ padding: 10 }),
  md: css({ padding: 13 }),
  sm: css({ padding: 10 }),
};

const Button = styled.button<IProps>`
  ${(props) => cssByVariants[props.variant ?? "primary"]}
  ${(props) => props.disabled && disabledCss}
  ${(props) => props.loading && loadingCss}
  ${(props) => sizesProps[props.size ?? "md"]}
  border:none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  ${styledCommonFn}
`;

export default Button;
