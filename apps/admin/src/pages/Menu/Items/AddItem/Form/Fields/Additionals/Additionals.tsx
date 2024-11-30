import { innerJoin, prop, symmetricDifference } from "ramda";
import { FC } from "react";
import { useController } from "react-hook-form";

import { UIMultipleSelect, UIMultipleSelectOption } from "@book-eat/ui";

import { IFormValues } from "../../models";
import { useSelector } from "react-redux";
import { additionsSelectors } from "$api";
import { getAdditionTitle } from "@book-eat/utils";

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
      {data?.map((item) => (
        <UIMultipleSelectOption key={item.id} value={item.id}>
          {getAdditionTitle(item)}
        </UIMultipleSelectOption>
      ))}
    </UIMultipleSelect>
  );
};

export default Additionals;
