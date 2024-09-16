import { Button, Flex } from "@book-eat/ui";
import { useSearchParams } from "react-router-dom";
import { ordersEndpoints, OrderStatus } from "@book-eat/api";
import { isNotNil } from "ramda";
import { useOrder } from "../useOrder.ts";
import { useEffect } from "react";

export const Submit = () => {
  const { id, status } = useOrder();
  const [searchParams, setSearchParams] = useSearchParams();
  const paymentUrl = searchParams.get("paymentUrl");
  const paymentStatus = searchParams.get("status");
  const [updateStatus] = ordersEndpoints.useUpdateOrderStatusMutation();
  const [confirmOrder] = ordersEndpoints.useConfirmOrderMutation();

  useEffect(() => {
    if (paymentStatus === "paid") {
      searchParams.delete("status");
      setSearchParams(searchParams);
      confirmOrder(id);
    }
  }, [paymentStatus, id]);

  const onCancel = () =>
    updateStatus({ id, statusVal: OrderStatus.CANCELLED_BY_CLIENT });

  const onClick = () => window.open(paymentUrl, "_blank");

  const paymentButtonAvailable = isNotNil(paymentUrl);

  if (status !== OrderStatus.NEW) {
    return null;
  }

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
