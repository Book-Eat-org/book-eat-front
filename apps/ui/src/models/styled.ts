import {
  BackgroundColorProps,
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  LayoutProps,
  MarginProps,
  OpacityProps,
  PaddingProps,
  PositionProps,
  TextColorProps,
} from "styled-system";
import { ColorProps, TextSizeProps } from "$theme";

export type TStyledCommonProps = LayoutProps &
  PaddingProps &
  MarginProps &
  BackgroundColorProps &
  TextColorProps &
  OpacityProps &
  BorderRadiusProps &
  BorderProps &
  BoxShadowProps &
  TextSizeProps &
  ColorProps &
  PositionProps &
  BackgroundProps;
