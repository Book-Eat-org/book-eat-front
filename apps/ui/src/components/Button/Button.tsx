import styled from "@emotion/styled";
import { SerializedStyles, css } from "@emotion/react";
import { theme } from "$theme";

interface IProps {
  variant?: "primary" | "gray" | "danger";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
}

const disabledCss = css`
  background-color: ${theme.colors.grayLight};
  color: ${theme.colors.gray};
`;

const cssByVariants = {
  primary: css`
    background-color: ${theme.colors.primary};
  `,
  gray: css`
    background-color: ${theme.colors.gray};
  `,
  danger: css`
    background-color: #ffc0ac;
  `,
};

const sizesProps: Record<NonNullable<IProps["size"]>, SerializedStyles> = {
  xl: css({ padding: 25 }),
  lg: css({ padding: 15 }),
  md: css({ padding: 15 }),
  sm: css({ padding: 15 }),
  xs: css({ padding: 15 }),
};

const Button = styled.button<IProps>`
  ${(props) => cssByVariants[props.variant ?? "primary"]}
  ${(props) => props.disabled && disabledCss}
  ${(props) => sizesProps[props.size ?? "md"]}
  border:none;
  border-radius: 10px;
  cursor: pointer;
`;

export default Button;
