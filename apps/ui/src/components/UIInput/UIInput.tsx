import { ChangeEvent, ChangeEventHandler, ComponentProps, FC } from "react";

import UIBaseInput from "../UIBaseInput";

interface IProps
  extends Omit<ComponentProps<typeof UIBaseInput>, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  variant?: "underline" | "outline";
  error?: string;
}

const UIInput: FC<IProps> = (props) => {
  const { onChange, ...restProps } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event.target.value, event);
  };

  return <UIBaseInput onChange={handleChange} {...restProps} />;
};

export default UIInput;
