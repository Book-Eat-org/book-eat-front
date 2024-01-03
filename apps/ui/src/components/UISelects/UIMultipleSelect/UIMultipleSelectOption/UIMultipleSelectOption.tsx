import  UICheckbox from "../../../UICheckbox";
import  {
  FC, ReactNode,
  SyntheticEvent,
} from "react";

import { useUIMultipleSelectContext } from "../context";

interface IProps {
  value?: string;
  children:ReactNode
}

const UIMultipleSelectOption: FC<IProps> = (props) => {
  const { value, children } = props;
  const {
    onChange,
    values: selectedValues,
  } = useUIMultipleSelectContext();

  const handleClick = (
    _: unknown,
    event?: SyntheticEvent
  ) => {
    onChange?.(value!);
    event?.stopPropagation();
  };

  const selected = selectedValues.includes(value!);

  return (
    <UICheckbox selected={selected} onChange={handleClick}>
      {children}
    </UICheckbox>
  );
};

export default UIMultipleSelectOption;
