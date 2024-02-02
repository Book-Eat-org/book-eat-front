import { ChangeEvent, FC, ReactNode, useMemo } from "react";
import Grid from "../Grid";
import { RadioGroupContext } from "./context.ts";
import Radio from "./Radio.tsx";

interface IProps {
  value: string;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

const RadioGroup: FC<IProps> & { Radio: typeof Radio } = (props) => {
  const { value, onChange, children } = props;

  const contextValue = useMemo(
    () => ({
      onChange,
      value,
    }),
    [onChange, value],
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <Grid>{children}</Grid>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.Radio = Radio;
export default RadioGroup;
