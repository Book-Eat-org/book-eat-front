import classNames from "classnames";
import  { ComponentProps, FC } from "react";
import classes from "./UIIconButton.module.css";

interface IProps extends ComponentProps<"button"> {
  Icon: React.FC;
  variant?: "primary" | "secondary";
}

const UIIconButton: FC<IProps> = (props) => {
  const {
    Icon,
    variant = "primary",
    className,
    ...restProps
  } = props;

  const buttonClasses = classNames(classes.button, className, classes[variant]);

  return (
    <button className={buttonClasses} {...restProps}>
      <Icon />
    </button>
  );
};

export default UIIconButton;
