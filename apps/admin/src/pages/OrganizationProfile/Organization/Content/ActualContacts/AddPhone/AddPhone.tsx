import { useController } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { PlusIcon, UIGrid } from "@book-eat/ui";

import { IFormValues } from "../../models";
import classes from "./AddPhone.module.css";

export const AddPhone = () => {
  const { field } = useController<IFormValues, "actualContactsPhones">({
    name: "actualContactsPhones",
  });

  const { onChange, value } = field;

  const handleChange = () => {
    onChange([...(value ?? []), { value: "", id: uuid() }]);
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
