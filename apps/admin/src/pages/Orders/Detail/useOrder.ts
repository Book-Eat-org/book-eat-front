import { IOrder } from "@book-eat/api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ordersSelectors } from "$store";

export const useOrder = (): IOrder => {
  const { id: orderId } = useParams();

  return useSelector((state) => ordersSelectors.selectById(state, orderId!))!;
};
