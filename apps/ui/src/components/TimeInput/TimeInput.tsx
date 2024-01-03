import { useIMask } from "react-imask";
import { FactoryOpts, MaskedRange } from "imask";
import UIBaseInput from "../UIBaseInput";
import { ChangeEvent, ComponentProps, FC } from "react";

interface IProps
  extends Omit<ComponentProps<typeof UIBaseInput>, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const TimeInput: FC<IProps> = (props) => {
  const { onChange, ...restProps } = props;
  const { ref } = useIMask<HTMLInputElement, FactoryOpts>(
    {
      overwrite: true,
      lazy: false,
      mask: "HH:MM",
      blocks: {
        HH: {
          mask: MaskedRange,
          from: 0,
          to: 23,
          autofix: true,
          placeholderChar: "0",
          maxLength: 2,
        },
        MM: {
          mask: MaskedRange,
          autofix: true,
          placeholderChar: "0",
          from: 0,
          to: 59,
          maxLength: 2,
        },
      },
    },
    { onAccept: (e) => onChange?.(e) },
  );

  return <UIBaseInput {...restProps} ref={ref} />;
};

export default TimeInput;
