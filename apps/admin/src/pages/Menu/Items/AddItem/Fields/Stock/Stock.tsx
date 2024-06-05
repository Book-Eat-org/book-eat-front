import { symmetricDifference } from "ramda";
import { FC } from "react";
import { useController } from "react-hook-form";

import { UIMultipleSelect, UIMultipleSelectOption } from "@book-eat/ui";

import { IFormValues } from "../../models";
import classes from "./Stock.module.css";
import { useSelector } from "react-redux";
import { placesByOrganizationSelectors } from "$api";

export const Stock: FC = () => {
  const { field, fieldState } = useController<IFormValues, "stock">({
    name: "stock",
    rules: { required: { value: true, message: "Выберите наличие на точках" } },
  });
  const { onChange, value = [] } = field;
  const errorMessage = fieldState.error?.message;

  const places = useSelector(placesByOrganizationSelectors.selectAll);

  const handleChange = (item: string) =>
    onChange(symmetricDifference(value, [item]));

  return (
    <div className={classes.wrapper}>
      <UIMultipleSelect
        values={value}
        onChange={handleChange}
        placeholder="Наличие на точках"
        error={errorMessage}
      >
        {places?.map(({ title, id }) => (
          <UIMultipleSelectOption key={id} value={String(id)}>
            {title}
          </UIMultipleSelectOption>
        ))}
      </UIMultipleSelect>
      <span className={classes.description}>Выбрано: {value.length}</span>
    </div>
  );
};

export default Stock;
