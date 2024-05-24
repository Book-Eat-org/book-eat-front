import styled from "@emotion/styled";
import { SerializedStyles, css } from "@emotion/react";
import { theme } from "$theme";
import { styledCommonFn } from "$utils";

interface IProps {
  variant?: "primary";
  disabled?: boolean;
  loading?: boolean;
  size?: "lg" | "md" | "sm";
}

const disabledCss = css`
  background-color: ${theme.colors.general80};
  color: ${theme.colors.general30};
`;

const loadingCss = css`
  background-color: ${theme.colors.red100};
  color: ${theme.colors.general30};
`;

const cssByVariants = {
  primary: css`
    background-color: ${theme.colors.primary100};
    color: ${theme.colors.general40};
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
  cursor: pointer;
  text-transform: uppercase;
  ${styledCommonFn}
`;

export default Button;
