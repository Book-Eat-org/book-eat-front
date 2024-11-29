import { Grid, Skeleton, Typography } from "@book-eat/ui";
import { ordersEndpoints } from "$api";
import { Item } from "./Item";
import {
  equals,
  groupBy,
  innerJoin,
  isEmpty,
  isNil,
  isNotNil,
  keys,
  prop,
  values,
} from "ramda";
import { ORDER_STATUSES_TITLES_CONFIG } from "@book-eat/utils";
import { IOrder, OrderStatus } from "@book-eat/api";
import { memo } from "react";
import { useOrdersPageContext } from "../context.ts";
import { Empty } from "./Empty";
import { Group } from "./Group";

const searchingTextEquals = (searchingText: string, targetText: string) =>
  isEmpty(searchingText)
    ? true
    : targetText.toLowerCase().includes(searchingText.toLowerCase());

const List = memo(() => {
  const { searchValue } = useOrdersPageContext();
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
      ].includes(item.status) &&
      (searchingTextEquals(searchValue, String(item.orderNumber)) ||
        searchingTextEquals(searchValue, item.customerInfo.customerPhone)),
  );

  const groupedData = groupBy(
    prop("status"),
    filteredData.sort((a, b) => {
      return new Date(b.readyTime) - new Date(a.readyTime);
    }),
  );

  const sortedKeys = innerJoin(equals, keys(OrderStatus), keys(groupedData));

  if (isEmpty(sortedKeys)) {
    return <Empty />;
  }

  return (
    <Grid gap={9}>
      {sortedKeys.map((key) => (
        <Group status={key}>
          {groupedData[key]!.map(({ id }) => (
            <Item key={id} id={id} />
          ))}
        </Group>
      ))}
    </Grid>
  );
});

export default List;
