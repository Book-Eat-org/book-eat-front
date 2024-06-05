import { Button, Flex } from "@book-eat/ui";
import { ordersEndpoints } from "$api";
import { useOrder } from "../useOrder.ts";
import { OrderStatus } from "@book-eat/api";
import { isNil } from "ramda";

const CONFIG = {
  [OrderStatus.IN_PROGRESS]: [
    {
      status: OrderStatus.CANCELLED_BY_PROVIDER,
      title: "Отменить",
    },
  ],
  [OrderStatus.NEW]: [
    {
      status: OrderStatus.IN_PROGRESS,
      title: "В работу",
    },
    {
      status: OrderStatus.CANCELLED_BY_PROVIDER,
      title: "Отменить",
    },
  ],
};

export const Submit = () => {
  const [trigger] = ordersEndpoints.useUpdateOrderStatusMutation();
  const { id, status } = useOrder();

  const configItem = CONFIG[status];

  if (isNil(configItem)) {
    return <Button>Оплатить</Button>;
  }

  return (
    <Flex gap={4} width="100%">
      {configItem.map(({ title, status }) => (
        <Button width="100%" onClick={() => trigger({ id, status })}>
          {title}
        </Button>
      ))}
    </Flex>
  );
};
