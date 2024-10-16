import { innerJoin, prop, symmetricDifference } from "ramda";
import { FC } from "react";
import { useController } from "react-hook-form";

import { UIMultipleSelect, UIMultipleSelectOption } from "@book-eat/ui";

import { IFormValues } from "../../models";
import classes from "./Additionals.module.css";
import { useSelector } from "react-redux";
import { additionsSelectors } from "$api";

export const Additionals: FC = () => {
  const { field } = useController<IFormValues, "additionals">({
    name: "additionals",
  });
  const { onChange, value = [] } = field;

  const data = useSelector(additionsSelectors.selectAll).sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  const handleChange = (item: string) =>
    onChange(symmetricDifference(value, [item]));

  const selectedAdditions = innerJoin(
    (addition, id) => id === addition.id,
    data,
    value,
  );
  const title = selectedAdditions.map(prop("title")).join(", ");

  return (
    <UIMultipleSelect
      values={value}
      onChange={handleChange}
      displayValue={title}
      placeholder="Наличие добавок"
    >
      {data?.map(({ title, id, weight }) => (
        <UIMultipleSelectOption key={id} value={id}>
          {title} {weight} гр.
        </UIMultipleSelectOption>
      ))}
    </UIMultipleSelect>
  );
};

export default Additionals;
