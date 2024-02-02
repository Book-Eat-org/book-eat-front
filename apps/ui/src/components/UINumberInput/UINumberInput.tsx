import { ChangeEvent, ChangeEventHandler, ComponentProps, FC } from "react";
import UIBaseInput from "../UIBaseInput";
import { useIMask } from "react-imask";
import { FactoryOpts } from "imask";

interface IProps
  extends Omit<ComponentProps<typeof UIBaseInput>, "value" | "onChange"> {
  value?: number;
  onChange?: (value: number, event: ChangeEvent<HTMLInputElement>) => void;
  variant?: "underline" | "outline";
  error?: string;
}

const UINumberInput: FC<IProps> = (props) => {
  const { onChange, ...restProps } = props;

  const { ref } = useIMask<HTMLInputElement, FactoryOpts>(
    {
      mask: /^\d+$/,
      lazy: false,
    },
    { onAccept: (e) => onChange?.(Number(e)) },
  );

  return <UIBaseInput {...restProps} ref={ref} />;
};

export default UINumberInput;
