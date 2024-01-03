import { useController } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { PlusIcon, UIGrid } from "@book-eat/ui";

import { IFormValues } from "../../models";
import classes from "./AddEmail.module.css";

export const AddEmail = () => {
  const { field } = useController<IFormValues, "legalContactsEmails">({
    name: "legalContactsEmails",
  });

  const { onChange, value = [] } = field;

  const handleChange = () => {
    onChange([...value, { value: "", id: uuid() }]);
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
      <span>Добавить email</span>
    </UIGrid>
  );
};
