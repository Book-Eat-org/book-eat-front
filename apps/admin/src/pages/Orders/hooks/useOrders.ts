import { useOrdersContext } from "./useOrdersContext";
import { ordersEndpoints, ordersSelectorsFactory } from "$api";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const rows = 100;

export const useOrders = (fetchable?: boolean) => {
  const { placeId } = useOrdersContext();

  const selector = useMemo(
    () => ordersSelectorsFactory({ rows, orgId: placeId ?? 0 }),
    [placeId],
  );

  const data = useSelector(selector.selectAll);

  const [trigger, { ...rest }] = ordersEndpoints.useLazyGetOrdersQuery();

  useEffect(() => {
    if (placeId && fetchable) {
      trigger({
        rows,
        orgId: placeId,
      });
    }
  }, [placeId]);

  return { ...rest, data };
};
