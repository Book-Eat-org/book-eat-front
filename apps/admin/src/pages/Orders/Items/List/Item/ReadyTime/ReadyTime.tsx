import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { ordersSelectors } from "$api";
import { Typography } from "@book-eat/ui";

interface IProps {
  id: EntityId;
}

export const ReadyTime: FC<IProps> = ({ id }) => {
  const { readyTime } = useSelector((state) =>
    ordersSelectors.selectById(state, id),
  )!;

  return <Typography size="14/14">{readyTime}</Typography>;
};
