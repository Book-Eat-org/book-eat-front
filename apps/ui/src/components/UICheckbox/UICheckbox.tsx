import classNames from "classnames";
import { FC, ReactNode, SyntheticEvent } from "react";

import UIGrid from "../UIGrid";
import classes from "./UICheckbox.module.css";
import Box from "../Box";
import { theme } from "$theme";

interface IProps {
  selected?: boolean;
  onChange?: (value: boolean, event?: SyntheticEvent) => void;
  error?: boolean;
  className?: string;
  children?: ReactNode;
}

const UICheckbox: FC<IProps> = (props) => {
  const { selected, onChange, children, className, error } = props;

  const handleChange = () => {
    onChange?.(!selected);
  };

  const wrapperClasses = classNames(classes.wrapper, className);

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
      <Box
        width={20}
        height={20}
        background={selected ? theme.colors.accent600 : theme.colors.general50}
        borderRadius={5}
        boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.1) inset"
        border={`1px solid ${theme.colors.general400}`}
      />
      <span className={textClasses}>{children}</span>
    </UIGrid>
  );
};

export default UICheckbox;
