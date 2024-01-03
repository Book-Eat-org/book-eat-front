import { groupBy, keys, prop } from "ramda";
import { FC } from "react";

import { UIGrid, UITypography } from "@book-eat/ui";

import { useOrders } from "../hooks";
import { STATUS_CONFIG } from "$constants";

const Nav: FC = () => {
  const { data = [] } = useOrders();

  const grouppedByStatus = groupBy(prop("orderStatus"), data);

  const statuses = keys(grouppedByStatus);

  return (
    <UIGrid colSizes={`repeat(${statuses.length},max-content)`} gap="15px">
      {statuses.map((status) => (
        <UITypography key={status} variant="textMd" weight="bold">
          {STATUS_CONFIG[status]}
        </UITypography>
      ))}
    </UIGrid>
  );
};

export default Nav;
