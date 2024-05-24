import {
  Box,
  Grid,
  ListNavigation,
  Skeleton,
  UITypography,
} from "@book-eat/ui";
import { groupBy, intersection, keys, prop } from "ramda";
import Order from "./Order";
import { useOrders } from "../hooks";
import { ORDER_STATUS_ORDER_ARRAY, STATUS_CONFIG } from "$constants";

const List = () => {
  const { data, isFetching } = useOrders(true);

  if (isFetching) {
    return <Skeleton count={12} gap={3} height={40} />;
  }

  const grouppedByStatus = groupBy(prop("orderStatus"), data);

  const sortedStatuses = intersection(
    keys(grouppedByStatus),
    ORDER_STATUS_ORDER_ARRAY,
  );

  return (
    <ListNavigation.ScrollContainer>
      <Grid gap={4}>
        {sortedStatuses.map((status) => (
          <ListNavigation.TargetItem id={status} key={status}>
            <Grid gap={4}>
              <Box pl={3}>
                <UITypography variant="textXl" color="gray" weight="bold">
                  {STATUS_CONFIG[status]}
                </UITypography>
              </Box>
              <Grid gap={3}>
                {grouppedByStatus?.[status]?.map((item) => (
                  <Order key={item.id} id={item.id} />
                ))}
              </Grid>
            </Grid>
          </ListNavigation.TargetItem>
        ))}
      </Grid>
    </ListNavigation.ScrollContainer>
  );
};

export default List;
