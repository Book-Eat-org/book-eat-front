import { Grid, Skeleton, Typography } from "@book-eat/ui";
import { ordersEndpoints } from "$api";
import { Item } from "./Item";
import {
  equals,
  groupBy,
  innerJoin,
  isNil,
  isNotNil,
  keys,
  prop,
  values,
} from "ramda";
import { ORDER_STATUSES_TITLES_CONFIG } from "@book-eat/utils";
import { OrderStatus } from "@book-eat/api/src";
import { IOrder } from "@book-eat/api";

const List = () => {
  const { isFetching, data } = ordersEndpoints.useGetOrdersQuery();
  const { entities } = data ?? {};

  if (isFetching || isNil(entities)) {
    return <Skeleton count={12} gap={3} height={40} />;
  }
  const filteredData: IOrder[] = values(entities).filter(
    (item) =>
      isNotNil(item) &&
      [
        OrderStatus.IN_PROGRESS,
        OrderStatus.PAID,
        OrderStatus.COMPLETED,
        OrderStatus.CANCELLED_BY_CLIENT,
        OrderStatus.CANCELLED_BY_PROVIDER,
      ].includes(item.status),
  );

  const groupedData = groupBy(
    prop("status"),
    filteredData.sort((a, b) => {
      return new Date(b.readyTime) - new Date(a.readyTime);
    }),
  );

  const sortedKeys = innerJoin(equals, keys(OrderStatus), keys(groupedData));
  console.log(sortedKeys);

  return (
    <Grid gap={9}>
      {sortedKeys.map((key) => (
        <Grid gap={6} key={key}>
          <Typography size="24/24" fontWeight={600}>
            {ORDER_STATUSES_TITLES_CONFIG[key]}
          </Typography>
          <Grid gap={3}>
            {groupedData[key]!.map(({ id }) => (
              <Item key={id} id={id} />
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
