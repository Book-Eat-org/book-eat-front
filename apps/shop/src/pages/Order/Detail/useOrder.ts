import { IOrder, orderByIdSelectorsFactory } from "@book-eat/api";
import { useParams } from "react-router-dom";
import { useSelector } from "$hooks";

export const useOrder = (): IOrder => {
  const { id: orderId } = useParams();
  const selector = orderByIdSelectorsFactory(orderId);
  return useSelector((state) => selector.selectById(state, orderId!)) ?? {};
};
