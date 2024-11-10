import { not } from "ramda";
import { FC, ReactNode, useMemo, useState } from "react";

import List from "../UISelectList";
import { UIMultipleSelectContext } from "./context";
import classes from "./UIMulitpleSelect.module.css";
import UIGrid from "../../UIGrid";
import UITypography from "../../UITypography";
import UIPopupMenu from "../../UIPopupMenu";
import { DownArrowIcon } from "$assets";
import { Typography } from "$components";
import { theme } from "$theme";

interface IProps {
  title?: string;
  values: string[];
  displayValue?: string;
  defaultOpened?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  prefix?: ReactNode;
  children?: ReactNode;
  error?: string;
}

const UIMultipleSelect: FC<IProps> = (props) => {
  const {
    values,
    onChange,
    prefix,
    title,
    defaultOpened = false,
    children,
    error,
    displayValue,
  } = props;
  const [opened, setOpened] = useState(defaultOpened);

  const contextValue = useMemo(
    () => ({ values, onChange, setOpened }),
    [values, onChange, setOpened],
  );
  const handleClick = () => setOpened(not);

  return (
    <UIMultipleSelectContext.Provider value={contextValue}>
      <UIGrid className={classes.wrapper} gap="3px" onClick={handleClick}>
        <fieldset className={classes.fieldset}>
          <legend className={classes.legend}>
            <UITypography variant="textXs">
              {title ?? props.placeholder}
            </UITypography>
          </legend>
          <UIGrid
            alignItems="center"
            padding="10px 10px 10px 0"
            colSizes={
              prefix ? "max-content auto max-content" : "auto max-content"
            }
            gap="10px"
          >
            {prefix && prefix}
            <UITypography variant="textMd">
              {displayValue ?? title ?? props.placeholder}
            </UITypography>
            <DownArrowIcon />
          </UIGrid>
          {opened && (
            <UIPopupMenu onClose={handleClick}>
              <List>{children}</List>
            </UIPopupMenu>
          )}
        </fieldset>
        {error && (
          <Typography size="12/12" color={theme.colors.red500} pl="15px">
            {error}
          </Typography>
        )}
      </UIGrid>
    </UIMultipleSelectContext.Provider>
  );
};

export default UIMultipleSelect;
