import UIInput from "../../UIInput";
import { useAddressContext } from "../context.ts";

const Entrance = () => {
  const { value: stateValue, setValue } = useAddressContext();

  const { entrance } = stateValue;
  const onChange = (value: string) => {
    setValue({ ...stateValue, entrance: value });
  };

  return <UIInput placeholder="Подъезд" value={entrance} onChange={onChange} />;
};

export default Entrance;
