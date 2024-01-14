import { groupBy, intersection, keys, prop } from "ramda";
import { FC } from "react";

import { Flex, ListNavigation } from "@book-eat/ui";

import { useOrders } from "../hooks";
import { ORDER_STATUS_ORDER_ARRAY, STATUS_CONFIG } from "$constants";

const Nav: FC = () => {
  const { data = [] } = useOrders();

  const grouppedByStatus = groupBy(prop("orderStatus"), data);

  const statuses = intersection(
    keys(grouppedByStatus),
    ORDER_STATUS_ORDER_ARRAY,
  );

  return (
    <Flex>
      {statuses.map((status) => (
        <ListNavigation.MenuNavItem id={status}>
          {STATUS_CONFIG[status]}
        </ListNavigation.MenuNavItem>
      ))}
    </Flex>
  );
};

export default Nav;
