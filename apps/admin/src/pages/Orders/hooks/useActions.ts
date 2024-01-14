import { useOrder } from "./useOrder";
import { OrderStatus } from "$enums";
import { ordersEndpoints } from "$api";

export const useActions = (
  id: number,
): { title: string; variant?: "secondary"; handler: VoidFunction }[] => {
  const order = useOrder(id);
  const [trigger] = ordersEndpoints.useUpdateOrderStatusMutation();

  const { orderStatus } = order ?? {};

  if (orderStatus === OrderStatus.NEW) {
    return [
      {
        title: "Отменить",
        variant: "secondary",
        handler: () => {
          const confirmed = confirm("Вы уверены, что хотите отменить заказ?");
          if (confirmed) {
            trigger({ id, statusVal: OrderStatus.CANCELLED_BY_PROVIDER });
          }
        },
      },
      {
        title: "Принять",
        handler: () => trigger({ id, statusVal: OrderStatus.ACCEPTED }),
      },
    ];
  }

  if (orderStatus === OrderStatus.ACCEPTED) {
    return [
      {
        title: "Отменить",
        variant: "secondary",
        handler: () =>
          trigger({ id, statusVal: OrderStatus.CANCELLED_BY_PROVIDER }),
      },
      {
        title: "Взять в работу",
        handler: () => trigger({ id, statusVal: OrderStatus.IN_PROGRESS }),
      },
    ];
  }

  if (orderStatus === OrderStatus.IN_PROGRESS) {
    return [
      {
        title: "Отменить",
        variant: "secondary",
        handler: () =>
          trigger({ id, statusVal: OrderStatus.CANCELLED_BY_PROVIDER }),
      },
      {
        title: "Взять в работу",
        handler: () => trigger({ id, statusVal: OrderStatus.COMPLETED }),
      },
    ];
  }

  return [];
};
