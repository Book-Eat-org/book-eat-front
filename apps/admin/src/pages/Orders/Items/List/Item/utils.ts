import { always, cond, gt, pipe, T } from "ramda";
import { theme } from "@book-eat/ui";
import { getOrderLeftTime } from "$utils";

export const getColorByLeftTime = cond([
  [gt(11), always(theme.colors.red50)],
  [gt(21), always(theme.colors.yellow50)],
  [T, always(theme.colors.general50)],
]);

export const getColorByReadyTime = pipe(getOrderLeftTime, getColorByLeftTime);
