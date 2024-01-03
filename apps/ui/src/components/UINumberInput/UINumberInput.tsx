import { ChangeEvent, ChangeEventHandler, ComponentProps, FC } from "react";
import UIBaseInput from "../UIBaseInput";

interface IProps
  extends Omit<ComponentProps<typeof UIBaseInput>, "value" | "onChange"> {
  value?: number;
  onChange?: (value: number, event: ChangeEvent<HTMLInputElement>) => void;
  variant?: "underline" | "outline";
  error?: string;
}

const UINumberInput: FC<IProps> = (props) => {
  const { onChange, ...restProps } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value: eventValue, validity } = event.target;
    const val = validity.valid ? Number(eventValue) : 0;
    onChange?.(val, event);
  };

  return <UIBaseInput onChange={handleChange} {...restProps} />;
};

export default UINumberInput;
