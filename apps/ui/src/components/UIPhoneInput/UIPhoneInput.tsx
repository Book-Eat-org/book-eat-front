import { ChangeEvent, ComponentProps, FC } from "react";
import UIBaseInput from "../UIBaseInput";
import { useIMask } from "react-imask";
import { FactoryOpts } from "imask";

interface IProps
  extends Omit<ComponentProps<typeof UIBaseInput>, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const UIPhoneInput: FC<IProps> = (props) => {
  const { onChange, value, ...restProps } = props;

  const { ref } = useIMask<HTMLInputElement, FactoryOpts>(
    {
      mask: "+{7}(000)000-00-00",
      lazy: false,
    },
    {
      onAccept: (_, maskRef) => {
        return onChange?.(maskRef.unmaskedValue);
      },
    },
  );

  return <UIBaseInput {...restProps} ref={ref} />;
};

export default UIPhoneInput;
