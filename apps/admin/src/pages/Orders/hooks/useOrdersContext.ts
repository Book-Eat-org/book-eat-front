import { useContext } from "react";
import { OrdersContext } from "../context";

export const useOrdersContext = () => useContext(OrdersContext);
