import { Button, Flex } from "@book-eat/ui";
import { useSearchParams } from "react-router-dom";
import { OrderStatus, ordersEndpoints } from "@book-eat/api";
import { isNotNil } from "ramda";
import { useOrder } from "../useOrder.ts";

export const Submit = () => {
  const { id } = useOrder();
  const [searchParams] = useSearchParams();
  const paymentUrl = searchParams.get("paymentUrl");
  const [updateStatus] = ordersEndpoints.useUpdateOrderStatusMutation();

  const onCancel = () =>
    updateStatus({ id, statusVal: OrderStatus.CANCELLED_BY_CLIENT });

  const onClick = () => window.open(paymentUrl, "_blank");

  const paymentButtonAvailable = isNotNil(paymentUrl);

  return (
    <Flex gap={8}>
      <Button variant="danger" onClick={onCancel} width="100%">
        Отменить заказ
      </Button>
      {paymentButtonAvailable && (
        <Button onClick={onClick} width="100%">
          Оплатить
        </Button>
      )}
    </Flex>
  );
};
