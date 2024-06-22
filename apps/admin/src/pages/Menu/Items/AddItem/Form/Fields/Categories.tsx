import { FC } from "react";
import { useController } from "react-hook-form";

import { UIMultipleSelect, UIMultipleSelectOption } from "@book-eat/ui";

import { IFormValues } from "../models";
import { symmetricDifference } from "ramda";
import { categoriesSelectors } from "$api";
import { useSelector } from "react-redux";

export const Categories: FC = () => {
  const data = useSelector(categoriesSelectors.selectAll);
  const { field, fieldState } = useController<IFormValues, "categories">({
    name: "categories",
    rules: { required: { value: true, message: "Выберите категорию" } },
  });
  const { onChange, value = [] } = field;
  const errorMessage = fieldState.error?.message;

  const handleChange = (item: string) =>
    onChange(symmetricDifference(value, [item]));

  return (
    <UIMultipleSelect
      values={value}
      onChange={handleChange}
      placeholder="Категории"
      error={errorMessage}
    >
      {data?.map((item) => (
        <UIMultipleSelectOption key={item.id} value={item.id}>
          {item.title}
        </UIMultipleSelectOption>
      ))}
    </UIMultipleSelect>
  );
};
