import classNames from "classnames";
import { ChangeEvent, ComponentProps, FC } from "react";

import classes from "./UITimeInput.module.css";

interface IProps extends Omit<ComponentProps<"input">, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  variant?: "underline" | "outline";
  error?: string;
}

const UITimeInput: FC<IProps> = (props) => {
  const {
    value,
    onChange,
    variant = "underline",
    className,
    error,
    ...restProps
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value, event);
  };

  const startsWithTwo = value?.[0] === "2";
  const otherCases = ["0", "1"].includes(value?.[0] ?? "");

  const mask = [
    /[0-2]/,
    startsWithTwo ? /[0-3]/ : otherCases && /[0-9]/,
    ":",
    /[0-5]/,
    /[0-9]/,
  ];

  const inputClasses = classNames(classes.input, className, {
    [classes.underline]: variant === "underline",
    [classes.outline]: variant === "outline",
  });

  return (
    <div className={classes.wrapper}>
      <input className={inputClasses} {...restProps} />
      <span className={classes.error}>{error}</span>
    </div>
  );
};

export default UITimeInput;
