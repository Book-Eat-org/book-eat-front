import classNames from "classnames";
import classes from "./Days.module.css";
import { useController } from "react-hook-form";
import { IFormValues } from "../../../../models.ts";
import { DayOfWeek } from "@book-eat/api";
import { FC } from "react";
import { DAYS_ITEMS } from "$constants";
import { Typography } from "@book-eat/ui";

interface IProps {
  day: DayOfWeek;
}

export const Day: FC<IProps> = (props) => {
  const { day } = props;
  const { field } = useController<IFormValues, "schedule">({
    name: "schedule",
  });
  const { onChange, value } = field;

  const item = DAYS_ITEMS.find(({ id }) => id === day)!;
  const selected = value.some(({ dayOfWeek }) => dayOfWeek === day);

  const handleChange = () => {
    if (selected) {
      onChange(value.filter(({ dayOfWeek }) => dayOfWeek !== day));
      return;
    }

    onChange([
      ...value,
      { dayOfWeek: day, timeFrom: "09:00:00", timeTo: "22:00:00" },
    ]);
  };

  return (
    <Typography
      size="14/14"
      onClick={handleChange}
      className={classNames(classes.item, {
        [classes.selected]: selected,
      })}
    >
      {item.name}
    </Typography>
  );
};
