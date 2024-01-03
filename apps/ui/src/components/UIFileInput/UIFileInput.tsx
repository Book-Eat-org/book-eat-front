import { isNil } from "ramda";
import { ChangeEvent, ChangeEventHandler, ComponentProps, FC } from "react";

import classes from "./UIImageInput.module.css";
import { PDFIcon } from "$assets";
import UIGrid from "../UIGrid";
import { v4 } from "uuid";
import UITypography from "../UITypography";
import classNames from "classnames";

interface IProps extends Omit<ComponentProps<"input">, "value" | "onChange"> {
  value?: File;
  onChange: (value: File, event: ChangeEvent<HTMLInputElement>) => void;
  fileName?: string;
  extensions?: string[];
  error?: string;
}

const UIFileInput: FC<IProps> = (props) => {
  const { value, onChange, error, fileName, extensions, ...restProps } = props;
  const id = v4();

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const file = event?.target?.files?.[0];

    if (isNil(file)) {
      return;
    }
    onChange(file, event);
  };

  const inputWrapperClasses = classNames(classes.inputWrapper, {
    [classes.error]: !isNil(error),
  });

  return (
    <UIGrid className={classes.wrapper} gap="5px">
      <UIGrid className={inputWrapperClasses}>
        <label className={classes.label} htmlFor={id}>
          {isNil(value) ? (
            <div className={classes.addWrapper}>+</div>
          ) : (
            <PDFIcon />
          )}
        </label>
        <input
          id={id}
          type="file"
          onChange={handleChange}
          className={classes.imageInput}
          {...restProps}
        />
      </UIGrid>
      <UIGrid>
        <UITypography variant="textMd" color="gray">
          {value?.name ?? fileName}
        </UITypography>
      </UIGrid>
    </UIGrid>
  );
};

export default UIFileInput;
