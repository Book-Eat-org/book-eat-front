import { symmetricDifference } from "ramda";
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
  const { onChange, value } = field;

  const data = useSelector(additionsSelectors.selectAll);

  const handleChange = (item: string) =>
    onChange(symmetricDifference(value, [item]));

  return (
    <div className={classes.wrapper}>
      <UIMultipleSelect
        values={value}
        onChange={handleChange}
        placeholder="Наличие добавок"
      >
        {data?.map(({ title, id }) => (
          <UIMultipleSelectOption key={id} value={id}>
            {title}
          </UIMultipleSelectOption>
        ))}
      </UIMultipleSelect>
      <span className={classes.description}>Выбрано: {value.length}</span>
    </div>
  );
};

export default Additionals;
