import { Skeleton, UIGrid, UITypography } from "@book-eat/ui";
import { groupBy, keys, prop } from "ramda";
import Order from "./Order";
import { useOrders } from "../hooks";
import { STATUS_CONFIG } from "$constants";

const List = () => {
  const { data, isFetching } = useOrders(true);

  if (isFetching) {
    return <Skeleton count={12} gap={3} height={40} />;
  }

  const grouppedByStatus = groupBy(prop("orderStatus"), data);

  return (
    <UIGrid gap="15px">
      {keys(grouppedByStatus).map((status) => (
        <UIGrid key={status} gap="15px">
          <UITypography variant="textXl" color="gray" weight="bold">
            {STATUS_CONFIG[status]}
          </UITypography>
          <UIGrid gap="15px">
            {grouppedByStatus?.[status]?.map((item) => (
              <Order key={item.id} id={item.id} />
            ))}
          </UIGrid>
        </UIGrid>
      ))}
    </UIGrid>
  );
};

export default List;
