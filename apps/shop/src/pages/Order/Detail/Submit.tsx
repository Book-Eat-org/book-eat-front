import { useOrder } from "./useOrder.ts";
import { Button, Flex } from "@book-eat/ui";
import { useSearchParams } from "react-router-dom";
import { OrderStatus, ordersEndpoints } from "@book-eat/api";
import { isNotNil } from "ramda";

export const Submit = () => {
  const { id } = useOrder();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const paymentUrl = searchParams.get("paymentUrl");
  const [updateStatus] = ordersEndpoints.useUpdateOrderStatusMutation();

  const onCancel = () =>
    updateStatus({ id, statusVal: OrderStatus.CANCELLED_BY_CLIENT });

  const onClick = () => window.open(paymentUrl, "_blank");

  const paymentButtonAvailable = status === "paid" && isNotNil(paymentUrl);

  return (
    <Flex>
      <Button variant="danger" onClick={onCancel}>
        Отменить заказ
      </Button>
      {paymentButtonAvailable && <Button onClick={onClick}>Оплатить</Button>}
    </Flex>
  );
};
