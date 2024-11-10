import { not } from "ramda";
import { FC, ReactNode, useMemo, useState } from "react";

import UIGrid from "../../UIGrid";
import List from "../UISelectList";
import { UISelectContext } from "./context";
import classes from "./UISelect.module.css";
import UITypography from "../../UITypography";
import UIPopupMenu from "../../UIPopupMenu";
import { DownArrowIcon } from "$assets";
import { Typography } from "$components";
import { theme } from "$theme";

interface IProps {
  value: string;
  disabled?: boolean;
  title?: string;
  defaultOpened?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  renderValue?: (value: string) => ReactNode;
  prefix?: ReactNode;
  error?: string;
  children: ReactNode;
}

const UISelect: FC<IProps> = (props) => {
  const {
    value,
    onChange,
    placeholder = "Не выбрано",
    title,
    disabled = false,
    children,
    renderValue,
    prefix,
    error,
  } = props;
  const [opened, setOpened] = useState(false);

  const listAvailable = opened && !disabled;

  const contextValue = useMemo(
    () => ({ value, onChange, setOpened }),
    [value, onChange, setOpened],
  );

  const handleClick = () => {
    if (!disabled) {
      setOpened(not);
    }
  };

  const displayValue = renderValue && value ? renderValue(value) : placeholder;

  return (
    <UISelectContext.Provider value={contextValue}>
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
            <UITypography variant="textMd">{displayValue}</UITypography>
            <DownArrowIcon />
          </UIGrid>
        </fieldset>
        {error && (
          <Typography size="12/12" color={theme.colors.red500} pl="15px">
            {error}
          </Typography>
        )}
        {listAvailable && (
          <UIPopupMenu onClose={handleClick}>
            <List>{children}</List>
          </UIPopupMenu>
        )}
      </UIGrid>
    </UISelectContext.Provider>
  );
};

export default UISelect;
