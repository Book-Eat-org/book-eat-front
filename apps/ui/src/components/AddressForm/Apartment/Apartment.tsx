import UIInput from "../../UIInput";
import { useAddressContext } from "../context.ts";

const Apartment = () => {
  const { value: stateValue, setValue } = useAddressContext();

  const { apartment } = stateValue;
  const onChange = (value: string) => {
    setValue({ ...stateValue, apartment: value });
  };

  return (
    <UIInput placeholder="Кв./Офис" value={apartment} onChange={onChange} />
  );
};

export default Apartment;
