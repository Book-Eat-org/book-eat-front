import { FC, useState } from "react";

import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";
import { IFormValues } from "../../../models";

const Address: FC = () => {
  const [opened, setOpened] = useState(false);
  const { field, fieldState } = useController<
    IFormValues,
    "legalContactsAddress"
  >({
    name: "legalContactsAddress",
    // rules: { required: { value: true, message: "Укажите адрес" } },
  });
  const { onChange, value } = field;

  const onSubmit = (address: string) => {
    onChange(address);
    setOpened(false);
  };

  return (
    <>
      <UIInput
        value={value}
        onClick={() => setOpened(true)}
        placeholder="Юридический адрес"
        type="text"
        error={fieldState.error?.message}
      />
    </>
  );
};

export default Address;
