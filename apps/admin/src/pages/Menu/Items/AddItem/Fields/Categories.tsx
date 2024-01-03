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
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  const handleChange = (item: string) =>
    onChange(symmetricDifference(value, [item]));

  return (
    <UIMultipleSelect
      values={value}
      onChange={handleChange}
      placeholder="Категории"
    >
      {data?.map((item) => (
        <UIMultipleSelectOption
          key={item.grouppingsId}
          value={item.grouppingsId}
        >
          {item.title}
        </UIMultipleSelectOption>
      ))}
    </UIMultipleSelect>
  );
};
