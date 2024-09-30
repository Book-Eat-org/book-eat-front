import { Button, Flex } from "@book-eat/ui";
import { useSearchParams } from "react-router-dom";
import { ordersEndpoints, OrderStatus } from "@book-eat/api";
import { isNotNil } from "ramda";
import { useOrder } from "../useOrder.ts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../../store/cart";

export const Submit = () => {
  const dispatch = useDispatch();
  const { id, status } = useOrder();
  const [searchParams, setSearchParams] = useSearchParams();
  const paymentUrl = searchParams.get("paymentUrl");
  const paymentStatus = searchParams.get("status");
  const [cancelOrder] = ordersEndpoints.useCancelOrderMutation();
  const [confirmOrder] = ordersEndpoints.useConfirmOrderMutation();

  useEffect(() => {
    if (paymentStatus === "paid") {
      searchParams.delete("status");
      setSearchParams(searchParams);
      confirmOrder(id);
    }
  }, [paymentStatus, id]);

  const onCancel = () => cancelOrder(id);

  const onClick = () => {
    if (paymentUrl) {
      dispatch(clearCart());
      window.open(paymentUrl, "_blank");
    }
  };

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
