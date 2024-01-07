import classNames from "classnames";
import { ComponentProps, forwardRef, ReactNode } from "react";

import classes from "./UIBaseInput.module.css";
import UITypography from "../UITypography";
import Grid from "../Grid";

interface IProps extends ComponentProps<"input"> {
  variant?: "underline" | "outline";
  error?: string;
  postfix?: ReactNode;
}

const UIBaseInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const {
    variant = "outline",
    title,
    className,
    error,
    postfix,
    ...restProps
  } = props;

  const inputClasses = classNames(classes.input, className, {
    [classes.underline]: variant === "underline",
    [classes.outline]: variant === "outline",
  });

  return (
    <Grid gap={1} width="100%">
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>
          <UITypography variant="textXs">
            {title ?? props.placeholder}
          </UITypography>
        </legend>
        <Grid
          gridTemplateColumns={postfix ? "auto max-content" : undefined}
          gap={5}
          alignItems="center"
        >
          <input className={inputClasses} {...restProps} ref={ref} />
          {postfix && <div className={classes.postfix}>{postfix}</div>}
        </Grid>
      </fieldset>
      <UITypography variant="textXs" className={classes.error}>
        {error}
      </UITypography>
    </Grid>
  );
});

export default UIBaseInput;
