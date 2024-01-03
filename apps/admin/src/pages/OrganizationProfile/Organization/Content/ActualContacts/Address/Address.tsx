import { FC, useState } from "react";
import { useController } from "react-hook-form";

import {
  AddressForm,
  LeftArrowIcon,
  UIIconButton,
  UIInput,
} from "@book-eat/ui";

import { IFormValues } from "../../../models";
import classes from "./Address.module.css";

const Address: FC = () => {
  const [mapOpened, setMapOpened] = useState(false);

  const { field, fieldState } = useController<
    IFormValues,
    "actualContactsAddress"
  >({
    name: "actualContactsAddress",
    rules: { required: { value: true, message: "Укажите адрес" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  const handleAddressClick = () => setMapOpened(true);
  const handleCloseDetailAddress = () => setMapOpened(false);

  const handleChange = (value?: string) => {
    onChange(value);
    handleCloseDetailAddress();
  };

  return (
    <>
      <UIInput
        value={value}
        onClick={handleAddressClick}
        title="Фактический адрес"
        placeholder="Фактический адрес"
        type="text"
        error={errorMessage}
      />
      {mapOpened && (
        <div className={classes.wrapper}>
          <UIIconButton
            Icon={LeftArrowIcon}
            onClick={handleCloseDetailAddress}
            variant="secondary"
          />
          <AddressForm onChange={handleChange} value={value} />
        </div>
      )}
    </>
  );
};

export default Address;
