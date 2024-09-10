import { IOrder } from "@book-eat/api";
import * as dayjs from "dayjs";

export const getOrderLeftTime = (readyTime: IOrder["readyTime"]) => {
  const [hours, minutes] = readyTime.split(":");

  const readyTimeDay = dayjs()
    .set("hours", Number(hours))
    .set("minutes", Number(minutes));

  return readyTimeDay.diff(dayjs(), "minutes");
};
