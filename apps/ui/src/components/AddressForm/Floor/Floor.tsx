import UIInput from "../../UIInput";
import { useAddressContext } from "../context.ts";

const Floor = () => {
  const { value: stateValue, setValue } = useAddressContext();

  const { floor } = stateValue;
  const onChange = (value: string) => {
    setValue({ ...stateValue, floor: value });
  };

  return <UIInput placeholder="Этаж" value={floor} onChange={onChange} />;
};

export default Floor;
