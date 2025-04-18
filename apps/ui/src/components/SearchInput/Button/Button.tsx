import styled from "@emotion/styled";
import { SerializedStyles, css } from "@emotion/react";
import { theme } from "$theme";
import { styledCommonFn } from "$utils";

interface IProps {
  variant?: "outline";
  disabled?: boolean;
  loading?: boolean;
  size?: "lg" | "md" | "sm";
  title?: string;
}

const disabledCss = css`
  background-color: ${theme.colors.general500};
  color: ${theme.colors.general50};
  cursor: not-allowed;
`;

const loadingCss = css`
  background-color: ${theme.colors.general200};
  color: ${theme.colors.general50};
  cursor: progress;
`;

const cssByVariants: Record<
  NonNullable<IProps["variant"]>,
  SerializedStyles
> = {
  outline: css`
    background: transparent;
    padding: 0 15px;
    position: relative;
    text-transform: none;
    &::after {
      position: absolute;
      content: '';
      left: 0;
      width: 1px;
      height: 100%;
      background: ${theme.colors.general400};
    }
  `,
};

const sizesProps: Record<NonNullable<IProps["size"]>, SerializedStyles> = {
  lg: css`
    font-size: 16px;
    line-height: 16px;
  `,
  md: css`
    font-size: 14px;
    line-height: 14px;
  `,
  sm: css`
    font-size: 12px;
    line-height: 12px;
  `,
};

const Button = styled.button<IProps>`
  ${(props) => cssByVariants[props.variant ?? "outline"]}
  ${(props) => props.disabled && disabledCss}
  ${(props) => props.loading && loadingCss}
  ${(props) => sizesProps[props.size ?? "lg"]}
  border: none;
  transition: all 0.15s ease-in;
  ${styledCommonFn}
`;

export default Button;