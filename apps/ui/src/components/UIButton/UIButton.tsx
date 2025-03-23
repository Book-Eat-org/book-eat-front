import classNames from "classnames";
import { ComponentProps, FC } from "react";

import UITypography from "../UITypography";
import classes from "./UIButton.module.css";

interface IProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "textLg" | "textMd" | "textXs";
  weight?: "semibold" | "normal";
  uppercase?: boolean;
}

const UIButton: FC<IProps> = (props) => {
  const { 
    children, 
    variant = "primary",
    size = "textXs",
    weight="semibold",
    uppercase = true,
    className, 
    ...restProps 
  } = props;

  const buttonClasses = classNames(classes.button, className, classes[variant]);

  return (
    <button className={buttonClasses} {...restProps}>
      <UITypography variant={size} weight={weight} uppercase={uppercase}>{children}</UITypography>
    </button>
  );
};

export default UIButton;
