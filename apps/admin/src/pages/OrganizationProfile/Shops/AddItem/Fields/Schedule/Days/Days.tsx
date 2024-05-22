import classNames from "classnames";
import { symmetricDifference } from "ramda";
import { FC } from "react";
import { useController } from "react-hook-form";

import { DAYS_ITEMS } from "$constants";

import { IFormValues } from "../../../models";
import { Flex } from "@book-eat/ui";
import classes from "./Days.module.css";

export const Days: FC = () => {
  const { field } = useController<IFormValues, "workingDays">({
    name: "workingDays",
  });
  const { onChange, value } = field;

  return (
    <Flex colSizes={`repeat(${DAYS_ITEMS.length},1fr)`} gap={2}>
      {DAYS_ITEMS.map(({ name, id }) => (
        <span
          onClick={() => onChange(symmetricDifference(value, [id]))}
          key={id}
          className={classNames(classes.item, {
            [classes.selected]: value.includes(id),
          })}
        >
          {name}
        </span>
      ))}
    </Flex>
  );
};
