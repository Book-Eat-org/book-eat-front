import {ChangeEvent, ComponentProps, FC, useEffect, useState} from "react";
import UIBaseInput from "../UIBaseInput";
import { useIMask } from "react-imask";
import {FactoryOpts, InputMask} from "imask";

interface IProps
  extends Omit<ComponentProps<typeof UIBaseInput>, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const UIPhoneInput: FC<IProps> = (props) => {
  const { onChange, value = "", ...restProps } = props;
  const [lazyMask, setLazyMask] = useState(true);
  const [maskRef, setMaskRef] = useState<InputMask | null>(null);

  const {
    ref,
    setUnmaskedValue,
    value: maskedValue,
  } = useIMask<HTMLInputElement, FactoryOpts>(
    {
      mask: "+{7}(000)000-00-00",
      lazy: lazyMask,
    },
    {
      onAccept: (_, maskRef) => {
        setMaskRef(maskRef); // сохранить mask объект
        return onChange?.(maskRef.unmaskedValue);
      },
    },
  );

  const handleFocus = () => {
    if (lazyMask) {
      setLazyMask(false);
      maskRef?.updateOptions({lazy:false})

    }
  };

  const handleBlur = () => {
    if (!lazyMask) {
      setLazyMask(true);
      maskRef?.updateOptions({lazy:true})
    }
  };


  useEffect(() => {
    setUnmaskedValue(value);
  }, [value]);

  console.log(restProps)

  return <UIBaseInput {...restProps} ref={ref} value={maskedValue}   onFocus={handleFocus} onBlur={handleBlur} />;
};

export default UIPhoneInput;
