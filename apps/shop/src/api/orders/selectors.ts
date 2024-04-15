import { ordersAdapter } from "./adapter.ts";
import { pipe } from "ramda";
import { IGetOrderParams, ordersEndpoints } from "./endpoints.ts";

export const ordersSelectorsFactory = ({ rows, orgId }: IGetOrderParams) => {
  const selector = ordersEndpoints.endpoints.getOrders.select({
    rows,
    orgId,
  });

  return ordersAdapter.getSelectors(
    pipe(selector, (a) => a.data ?? ordersAdapter.getInitialState()),
  );
};
