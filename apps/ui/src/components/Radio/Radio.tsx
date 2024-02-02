import { ChangeEvent, FC, ReactNode, useContext } from "react";
import { RadioGroupContext } from "./context.ts";

interface IProps {
  children?: ReactNode;
  value: string;
}
const Radio: FC<IProps> = (props) => {
  const { value } = props;

  const { onChange, value: contextValue } = useContext(RadioGroupContext) ?? {};

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (value) {
      onChange?.(value, event);
    }
  };

  const selected = contextValue === value;

  return (
    <label>
      <span>
        <input onChange={handleChange} type="radio" />
      </span>
      <span>{value}</span>
    </label>
  );
};

export default Radio;
