import {FC, ReactNode} from "react";

import { useUISelectContext } from "../context";
import  UICheckbox from "../../../UICheckbox";

interface IProps {
  value?: string;
  children?:ReactNode
}

const UIOption: FC<IProps> = (props) => {
  const { value, children } = props;
  const { onChange, value: selectedValue, setOpened } = useUISelectContext();

  const handleClick = () => {
    if (value){
      onChange(value);
    }
    setOpened(false);
  };

  const selected = selectedValue === value;

  return (
    <UICheckbox selected={selected} onChange={handleClick}>
      {children}
    </UICheckbox>
  );
};

export default UIOption;
