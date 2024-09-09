import styled from "@emotion/styled";
import { SerializedStyles, css } from "@emotion/react";
import { theme } from "$theme";
import { styledCommonFn } from "$utils";

interface IProps {
  variant?: "primary" | "primaryLight";
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

const cssByVariants = {
  primary: css`
    background-color: ${theme.colors.accent500};
    fill: ${theme.colors.general50};
  `,
  primaryLight: css`
    background-color: ${theme.colors.accent100};
    fill: ${theme.colors.general50};
  `,
};

const sizesProps: Record<NonNullable<IProps["size"]>, SerializedStyles> = {
  lg: css({ padding: 8 }),
  md: css({ height: 30, width: 30 }),
  sm: css({ padding: 4 }),
};

const IconButton = styled.button<IProps>`
  ${(props) => cssByVariants[props.variant ?? "primary"]}
  ${(props) => props.disabled && disabledCss}
  ${(props) => props.loading && loadingCss}
  ${(props) => sizesProps[props.size ?? "md"]}
  border:none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  align-items: center;
  display: inline-flex;
  ${styledCommonFn}
`;

export default IconButton;
