import classNames from "classnames";
import {ComponentProps,FocusEvent, forwardRef, ReactNode, useState} from "react";

import classes from "./UIBaseInput.module.css";
import Grid from "../Grid";
import { theme } from "$theme";
import { Typography } from "$components";
import { isEmpty, isNotNil } from "ramda";

interface IProps extends ComponentProps<"input"> {
  variant?: "underline" | "outline";
  error?: string;
  postfix?: ReactNode;
}

const UIBaseInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const [focused, setFocused] = useState<boolean>(false);

  const {
    variant = "outline",
    title,
    className,
    error,
    postfix,
    placeholder,
    ...restProps
  } = props;

  const onFocus = (event:FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    props.onFocus?.(event);
  }
  const onBlur = (event:FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    props.onBlur?.(event);
  }

  const inputClasses = classNames(classes.input, className, {
    [classes.underline]: variant === "underline",
    [classes.outline]: variant === "outline",
  });

  const titleActive =
    focused || (isNotNil(restProps.value) && !isEmpty(restProps.value));

  return (
    <Grid gap={1} width="100%">
      <Grid
        border={`1px solid ${!error ? theme.colors.general300 : theme.colors.red500}`}
        p={titleActive ? "19px 14px 7px" : "13px 14px"}
        borderRadius="10px"
        backgroundColor={theme.colors.general50}
      >
        {titleActive && (
          <Typography size="12/12" className={classes.title} color={theme.colors.general600}>
            {title}
          </Typography>
        )}
        <Grid
          gridTemplateColumns={postfix ? "auto max-content" : undefined}
          gap={5}
          alignItems="center"
        >
          <input
            className={inputClasses}
            placeholder={focused ? placeholder : title}
            {...restProps}
            ref={ref}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {postfix && <div className={classes.postfix}>{postfix}</div>}
        </Grid>
      </Grid>
      {error && (
        <Typography size="12/12" color={theme.colors.red500} pl="15px">
          {error}
        </Typography>
      )}
    </Grid>
  );
});

export default UIBaseInput;
