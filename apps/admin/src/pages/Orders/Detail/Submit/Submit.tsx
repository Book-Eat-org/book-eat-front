import { Button, Flex } from "@book-eat/ui";
import { ordersEndpoints } from "$api";
import { useOrder } from "../useOrder.ts";
import { OrderStatus } from "@book-eat/api";
import { isNil } from "ramda";

const BUTTONS_ACTIONS_CONFIG: Record<
  OrderStatus,
  { title: string; variant: string }
> = {
  [OrderStatus.CANCELLED_BY_PROVIDER]: {
    title: "Отменить заказ",
    variant: "danger",
  },
  [OrderStatus.IN_PROGRESS]: {
    title: "Взять в работу",
    variant: "primary",
  },
};

const CONFIG_ACTION_MAP: Record<OrderStatus, OrderStatus[]> = {
  [OrderStatus.IN_PROGRESS]: [],
  [OrderStatus.NEW]: [
    OrderStatus.CANCELLED_BY_PROVIDER,
    OrderStatus.IN_PROGRESS,
  ],
  [OrderStatus.PAID]: [
    OrderStatus.CANCELLED_BY_PROVIDER,
    OrderStatus.IN_PROGRESS,
  ],
  [OrderStatus.ERROR]: [],
  [OrderStatus.CANCELLED_BY_CLIENT]: [],
  [OrderStatus.COMPLETED]: [],
  [OrderStatus.CANCELLED_BY_PROVIDER]: [],
};

export const Submit = () => {
  const [trigger] = ordersEndpoints.useUpdateOrderStatusMutation();
  const { id, status } = useOrder();

  const configItem = CONFIG_ACTION_MAP[status];

  if (isNil(configItem)) {
    return null;
  }

  return (
    <Flex gap={4} width="100%">
      {configItem.map((status) => (
        <Button
          key={status}
          width="100%"
          variant={BUTTONS_ACTIONS_CONFIG[status].variant}
          onClick={() => trigger({ id, status })}
        >
          {BUTTONS_ACTIONS_CONFIG[status].title}
        </Button>
      ))}
    </Flex>
  );
};
