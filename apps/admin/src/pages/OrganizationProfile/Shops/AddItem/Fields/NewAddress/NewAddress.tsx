import { FC } from "react";

import { useController } from "react-hook-form";

import { AddressForm } from "@book-eat/ui";
import { IFormValues } from "../../models";

import classes from "./NewAddress.module.css";

interface IProps {
  onClose: () => void;
}

const NewAddress: FC<IProps> = (props) => {
  const { onClose } = props;

  const { field } = useController<IFormValues, "address">({
    name: "address",
    rules: { required: { value: true, message: "Укажите адрес" } },
  });
  const { onChange, value } = field;

  const onSubmit = (value?: string) => {
    onChange(value);
    onClose();
  };

  return (
    <div className={classes.wrapper}>
      <AddressForm onChange={onSubmit} value={value} onBack={onClose} />
    </div>
  );
};

export default NewAddress;
