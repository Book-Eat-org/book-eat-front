import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { ordersSelectors } from "$api";
import { Typography } from "@book-eat/ui";
import { DELIVERY_TITLES_CONFIG } from "@book-eat/utils";

interface IProps {
  id: EntityId;
}

export const DeliveryType: FC<IProps> = ({ id }) => {
  const order = useSelector((state) => ordersSelectors.selectById(state, id))!;

  return (
    <Typography size="14/14">
      {DELIVERY_TITLES_CONFIG[order.delivery.type.name]}
    </Typography>
  );
};
