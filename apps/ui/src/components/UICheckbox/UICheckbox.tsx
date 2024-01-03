import classNames from "classnames";
import {
  FC, ReactNode,
  SyntheticEvent,
} from "react";

import UIGrid from "../UIGrid";
import classes from "./UICheckbox.module.css";

interface IProps {
  selected?: boolean;
  onChange?: (value: boolean, event?: SyntheticEvent) => void;
  error?: boolean;
  className?: string;
  children?:ReactNode;
}

const UICheckbox: FC<IProps> = (props) => {
  const { selected, onChange, children, className, error } = props;

  const handleChange = () => {
    onChange?.(!selected);
  };

  const wrapperClasses = classNames(classes.wrapper, className);

  const checkBoxClasses = classNames(classes.checkbox, {
    [classes.selected]: selected,
  });

  const textClasses = classNames(classes.text, {
    [classes.error]: error,
  });

  return (
    <UIGrid
      colSizes="max-content auto"
      gap="13px"
      alignItems="start"
      onClick={handleChange}
      className={wrapperClasses}
    >
      <div className={checkBoxClasses} />
      <span className={textClasses}>{children}</span>
    </UIGrid>
  );
};

export default UICheckbox;
