import { groupBy, keys, prop } from "ramda";
import { FC } from "react";

import { Flex, ListNavigation } from "@book-eat/ui";

import { useOrders } from "../hooks";
import { STATUS_CONFIG } from "$constants";

const Nav: FC = () => {
  const { data = [] } = useOrders();

  const grouppedByStatus = groupBy(prop("orderStatus"), data);

  const statuses = keys(grouppedByStatus);

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
