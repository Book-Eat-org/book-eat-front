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
  lg: css({
    width: 40,
    height: 40,
    padding: 8,
  }),
  md: css({
    width: 30,
    height: 30,
    padding: 6,
  }),
  sm: css({
    width: 24,
    height: 24,
    padding: 4,
  }),
};

const IconButton = styled.button<IProps>`
  ${(props) => cssByVariants[props.variant ?? "primary"]}
  ${(props) => props.disabled && disabledCss}
  ${(props) => props.loading && loadingCss}
  ${(props) => sizesProps[props.size ?? "md"]}
  
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  
  ${styledCommonFn}
`;

export default IconButton;
