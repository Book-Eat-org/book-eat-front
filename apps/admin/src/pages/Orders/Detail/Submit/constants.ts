import { OrderStatus } from "@book-eat/api";
import { ComponentProps } from "react";
import { Button } from "@book-eat/ui";

export const BUTTONS_ACTIONS_CONFIG: Partial<
  Record<
    OrderStatus,
    { title: string; variant: ComponentProps<typeof Button>["variant"] }
  >
> = {
  [OrderStatus.CANCELLED_BY_PROVIDER]: {
    title: "Отменить заказ",
    variant: "danger",
  },
  [OrderStatus.IN_PROGRESS]: {
    title: "Взять в работу",
    variant: "primary",
  },
  [OrderStatus.COMPLETED]: {
    title: "Завершить заказ",
    variant: "primary",
  },
};

export const CONFIG_ACTION_MAP: Partial<Record<OrderStatus, OrderStatus[]>> = {
  [OrderStatus.IN_PROGRESS]: [OrderStatus.COMPLETED],
  [OrderStatus.NEW]: [
    OrderStatus.CANCELLED_BY_PROVIDER,
    OrderStatus.IN_PROGRESS,
  ],
  [OrderStatus.PAID]: [
    OrderStatus.CANCELLED_BY_PROVIDER,
    OrderStatus.IN_PROGRESS,
  ],
  [OrderStatus.CANCELLED_BY_CLIENT]: [],
  [OrderStatus.CANCELLED_BY_PROVIDER]: [],
};
