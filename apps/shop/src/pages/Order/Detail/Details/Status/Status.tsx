import { useOrder } from "../../useOrder.ts";
import { OrderStatus } from "@book-eat/api";
import { isNotNil } from "ramda";

export const Status = () => {
  const { status, delivery } = useOrder();

  if (status === OrderStatus.NEW) {
    return "Ожидает оплаты";
  }

  if (status === OrderStatus.COMPLETED) {
    return "Заказ завершен";
  }

  if (status === OrderStatus.ERROR) {
    return "Оплата не завершена";
  }

  if (status === OrderStatus.PAID) {
    return "Оплачен";
  }

  if (status === OrderStatus.IN_PROGRESS) {
    if (isNotNil(delivery)) {
      return `Готовится. Ссылка для отслеживания: ${delivery.trackingUrl}`;
    }
    return "Готовится";
  }

  return null;
};
