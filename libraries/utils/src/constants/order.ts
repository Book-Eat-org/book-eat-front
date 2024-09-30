import { OrderStatus } from "@book-eat/api";

export const ORDER_STATUSES_TITLES_CONFIG: Record<OrderStatus, string> = {
  [OrderStatus.NEW]: "Новые",
  [OrderStatus.PAID]: "Оплаченные",
  [OrderStatus.CANCELLED_BY_CLIENT]: "Отмененные клиентом",
  [OrderStatus.CANCELLED_BY_PROVIDER]: "Отмененные менеджером",
  [OrderStatus.ERROR]: "Ошибочные",
  [OrderStatus.COMPLETED]: "Выполненные",
  [OrderStatus.IN_PROGRESS]: "В работе",
};
