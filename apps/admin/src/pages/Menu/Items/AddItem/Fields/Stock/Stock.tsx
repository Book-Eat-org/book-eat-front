import { symmetricDifference } from "ramda";
import { FC } from "react";
import { useController } from "react-hook-form";

import { UIMultipleSelect, UIMultipleSelectOption } from "@book-eat/ui";

import { IFormValues } from "../../models";
import classes from "./Stock.module.css";
import { useSelector } from "react-redux";
import { placesSelectors } from "$api";

export const Stock: FC = () => {
  const { field } = useController<IFormValues, "stock">({
    name: "stock",
  });
  const { onChange, value } = field;

  const places = useSelector(placesSelectors.selectAll);

  const handleChange = (item: string) =>
    onChange(symmetricDifference(value, [item]));

  return (
    <div className={classes.wrapper}>
      <UIMultipleSelect
        values={value}
        onChange={handleChange}
        placeholder="Наличие на точках"
      >
        {places?.map(({ title, placeId }) => (
          <UIMultipleSelectOption key={placeId} value={String(placeId)}>
            {title}
          </UIMultipleSelectOption>
        ))}
      </UIMultipleSelect>
      <span className={classes.description}>Выбрано: {value.length}</span>
    </div>
  );
};

export default Stock;
