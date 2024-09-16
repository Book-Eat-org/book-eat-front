import { FC, useMemo } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIOption, UISelect } from "@book-eat/ui";
import { identity } from "ramda";
import dayjs, { Dayjs } from "dayjs";

const createNearestDate = () => {
  const time = dayjs();
  const roundTime = 15;
  const roundedMinute = Math.ceil(time.minute() / roundTime + 1) * roundTime;
  return time.minute(roundedMinute);
};

const getItems = (closeTime: Dayjs) => {
  const items: Dayjs[] = [];
  let currentTime = createNearestDate();
  while (closeTime.diff(currentTime) > 0) {
    items.push(currentTime);
    currentTime = currentTime.add(15, "minutes");
  }
  return items;
};

export const TakeUpTime: FC = () => {
  const { field, fieldState } = useController<IFormValues, "takeUpTime">({
    name: "takeUpTime",
    rules: { required: { value: true, message: "Укажите время " } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  const closeTime = dayjs().hour(22);

  const options = useMemo(() => getItems(closeTime), []);

  return (
    <UISelect
      value={value}
      onChange={onChange}
      placeholder="Когда"
      renderValue={(item) => dayjs(item).format("H:mm")}
    >
      {options.map((item) => {
        const formatted = item.format("H:mm");
        return <UIOption value={item.toISOString()}>{formatted}</UIOption>;
      })}
    </UISelect>
  );
};
