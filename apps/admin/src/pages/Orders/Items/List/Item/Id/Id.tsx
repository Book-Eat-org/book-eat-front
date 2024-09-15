import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { theme, Typography } from "@book-eat/ui";
import { useSelector } from "react-redux";
import { ordersSelectors } from "$store";

interface IProps {
  id: EntityId;
}

export const Id: FC<IProps> = ({ id }) => {
  const order = useSelector((state) => ordersSelectors.selectById(state, id))!;
  const { orderNumber } = order;
  return (
    <Typography fontWeight={700} size="14/14" color={theme.colors.general600}>
      №{orderNumber}
    </Typography>
  );
};
