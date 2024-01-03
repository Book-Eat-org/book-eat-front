import classNames from "classnames";
import { ComponentProps, FC } from "react";

import UITypography from "../UITypography";
import classes from "./UIButton.module.css";

interface IProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

const UIButton: FC<IProps> = (props) => {
  const { children, variant = "primary", className, ...restProps } = props;

  const buttonClasses = classNames(classes.button, className, classes[variant]);

  return (
    <button className={buttonClasses} {...restProps}>
      <UITypography variant="textXs" weight="semibold" uppercase>{children}</UITypography>
    </button>
  );
};

export default UIButton;
