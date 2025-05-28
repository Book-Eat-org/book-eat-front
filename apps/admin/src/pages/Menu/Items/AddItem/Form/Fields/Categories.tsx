import { FC } from "react";
import { useController } from "react-hook-form";

import { UIMultipleSelect, UIMultipleSelectOption } from "@book-eat/ui";

import { IFormValues } from "../models";
import { innerJoin, prop, symmetricDifference } from "ramda";
import { useSelector } from "react-redux";
import { categoriesSelectors } from "$store";

export const Categories: FC = () => {
  const data = useSelector(categoriesSelectors.selectAll).sort((a, b) =>
    a.title.localeCompare(b.title),
  );
  const { field, fieldState } = useController<IFormValues, "categories">({
    name: "categories",
  });
  const { onChange, value = [] } = field;
  const errorMessage = fieldState.error?.message;

  const handleChange = (item: string) =>
    onChange(symmetricDifference(value, [item]));

  const selectedCategories = innerJoin(
    (category, id) => id === category.id,
    data,
    value,
  );
  const title = selectedCategories.map(prop("title")).join(", ");

  return (
    <UIMultipleSelect
      values={value}
      onChange={handleChange}
      placeholder="Категории"
      displayValue={title}
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
