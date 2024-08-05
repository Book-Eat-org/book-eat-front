import { useOrder } from "./useOrder.ts";
import { Button } from "@book-eat/ui";
import { useSearchParams } from "react-router-dom";
import { OrderStatus, ordersEndpoints } from "@book-eat/api";

export const Submit = () => {
  const { paymentUrl, id } = useOrder();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const [updateStatus] = ordersEndpoints.useUpdateOrderStatusMutation();

  if (status === "paid") {
    const onClick = () =>
      updateStatus({ id, statusVal: OrderStatus.CANCELLED_BY_CLIENT });
    return (
      <Button variant="danger" onClick={onClick}>
        Отменить заказ
      </Button>
    );
  }

  if (!paymentUrl) {
    return null;
  }

  const onClick = () => window.open(paymentUrl, "_blank");

  return <Button onClick={onClick}>Оплатить</Button>;
};
