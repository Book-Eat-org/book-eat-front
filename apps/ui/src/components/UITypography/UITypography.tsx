import classNames from "classnames";
import {FC, ReactNode} from "react";

import classes from "./UITypography.module.css";
import {isNil} from "ramda";

interface IProps {
  variant:
    | "displayXl"
    | "textXl"
    | "textMd"
    | "textXs"
    | "captionMd"
    | "captionXs";
  italic?: boolean;
  weight?: "bold" | "semibold";
  uppercase?: boolean;
  className?: string;
  color?: "gray" | "blue" | "red";
  children:ReactNode;
}

const UITypography: FC<IProps> = (props) => {
  const { variant, children, weight, italic, className, color, uppercase } =
    props;

  const textClasses = classNames(
    classes[variant],
      isNil(weight) ? undefined : classes[weight],
      isNil(color) ? undefined : classes[color],
    className,
    {
      [classes.italic]: italic,
      [classes.uppercase]: uppercase,
    }
  );

  return <span className={textClasses}>{children}</span>;
};

export default UITypography;
