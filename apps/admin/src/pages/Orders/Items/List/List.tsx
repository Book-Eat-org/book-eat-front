import { Grid, Skeleton, Typography } from "@book-eat/ui";
import { ordersEndpoints } from "$api";
import { Item } from "./Item";
import { groupBy, isNil, isNotNil, keys, prop, values } from "ramda";
import { ORDER_STATUSES_TITLES_CONFIG } from "@book-eat/utils/src";
import { getOrderLeftTime } from "$utils";

const List = () => {
  const { isFetching, data } = ordersEndpoints.useGetOrdersQuery();
  const { entities } = data ?? {};

  if (isFetching || isNil(entities)) {
    return <Skeleton count={12} gap={3} height={40} />;
  }

  const groupedData = groupBy(
    prop("status"),
    values(entities)
      .filter(isNotNil)
      .sort((a, b) => {
        return (
          getOrderLeftTime(a.readyTime ?? "00:00:00") -
          getOrderLeftTime(b.readyTime ?? "00:00:00")
        );
      }),
  );

  return (
    <Grid gap={3}>
      {keys(groupedData).map((key) => (
        <Grid gap={3} key={key}>
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
