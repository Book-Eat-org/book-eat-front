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

    if (validity.valid) {
      onChange?.(Number(eventValue), event);
    }
  };

  return (
    <UIBaseInput
      onChange={handleChange}
      type="text"
      pattern="[0-9]*"
      {...restProps}
    />
  );
};

export default UINumberInput;
