import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { ordersSelectors } from "$api";
import { Typography } from "@book-eat/ui";
import dayjs from "dayjs";
import { isNil } from "ramda";

interface IProps {
  id: EntityId;
}

export const ReadyTime: FC<IProps> = ({ id }) => {
  const { readyTime } = useSelector((state) =>
    ordersSelectors.selectById(state, id),
  )!;

  if (isNil(readyTime)) {
    return null;
  }

  const currentDate = dayjs();

  const timeLeftInHours = currentDate.diff(readyTime, "hours");
  const timeLeftInMinutes = currentDate.diff(readyTime, "minutes");
  const timeLeft =
    timeLeftInHours > 1 ? `${timeLeftInHours}ч` : `${timeLeftInMinutes}м`;

  return <Typography size="14/14">{timeLeft}</Typography>;
};
