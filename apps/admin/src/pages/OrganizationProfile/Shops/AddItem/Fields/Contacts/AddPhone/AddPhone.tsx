import { useController } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { PlusIcon, UIGrid } from "@book-eat/ui";
import { Contacts } from "$enums";

import { IFormValues } from "../../../models";
import classes from "./AddPhone.module.css";

export const AddPhone = () => {
  const { field } = useController<IFormValues, "additionalFields">({
    name: "additionalFields",
  });

  const { onChange, value } = field;

  const handleChange = () => {
    onChange([...value, { title: Contacts.Phone, value: "", id: uuid() }]);
  };

  return (
    <UIGrid
      colSizes="max-content auto"
      gap="15px"
      alignItems="center"
      padding="10px"
      onClick={handleChange}
      className={classes.wrapper}
    >
      <PlusIcon />
      <span>Добавить телефон</span>
    </UIGrid>
  );
};
