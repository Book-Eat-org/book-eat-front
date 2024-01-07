import {
  BackgroundColorProps,
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  LayoutProps,
  MarginProps,
  OpacityProps,
  PaddingProps,
  TextColorProps,
} from "styled-system";

export type TStyledCommonProps = LayoutProps &
  PaddingProps &
  MarginProps &
  BackgroundColorProps &
  TextColorProps &
  OpacityProps &
  BorderRadiusProps &
  BorderProps &
  BackgroundProps;
