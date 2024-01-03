import UIInput from "../../UIInput";
import { useAddressContext } from "../context.ts";

const Intercom = () => {
  const { value: stateValue, setValue } = useAddressContext();

  const { intercom } = stateValue;
  const onChange = (value: string) => {
    setValue({ ...stateValue, intercom: value });
  };

  return <UIInput placeholder="Домофон" value={intercom} onChange={onChange} />;
};

export default Intercom;
