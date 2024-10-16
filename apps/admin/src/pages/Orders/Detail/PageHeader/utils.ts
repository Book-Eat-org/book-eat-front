import { always, cond, equals, T } from "ramda";
import { OrderStatus } from "$enums";

export const getStatusLabel = cond([
  [equals(OrderStatus.CANCELLED_BY_PROVIDER), always("отменен!")],
  [equals(OrderStatus.CANCELLED_BY_CLIENT), always("отменен!")],
  [equals(OrderStatus.IN_PROGRESS), always("в работе!")],
  [equals(OrderStatus.COMPLETED), always("выполнен!")],
  [T, always(undefined)],
]);
