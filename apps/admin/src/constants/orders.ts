import { OrdersIssuingMode, OrderStatus } from "$enums";
import { IPlace } from "$models";

export const STATUS_CONFIG: Record<OrderStatus | string, string> = {
  [OrderStatus.NEW]: "Новые",
  [OrderStatus.IN_PROGRESS]: "В работе",
  [OrderStatus.UNPAID]: "Не оплачены",
  [OrderStatus.ACCEPTED]: "Принятые",
  [OrderStatus.CANCELLED_BY_CLIENT]: "Отмененные",
  [OrderStatus.CANCELLED_BY_PROVIDER]: "Отмененные",
};

export const ORDERS_ISSUING_MODE_CONFIG = {
  [OrdersIssuingMode.DELIVERY]: "Доставка",
  [OrdersIssuingMode.TO_GO]: "С собой",
  [OrdersIssuingMode.IN_PLACE]: "На месте",
  [OrdersIssuingMode.WITH_SELF]: "На вынос",
};

export const PLACE_SETTINGS_CONFIG: Record<
  keyof IPlace["placeSetting"],
  string
> = {
  deliveryAvailable: "Доставка",
  onPlaceAvailable: "На месте",
  toOutsideAvailable: "С собой",
};
