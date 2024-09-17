import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { ordersSelectors } from "$api";
import { Typography } from "@book-eat/ui";
import dayjs from "dayjs";
import { isNil } from "ramda";
import { getLeftTimeLabel } from "$utils";

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

  const timeLeftInMs = dayjs(readyTime).diff(currentDate);

  const timeLeft = getLeftTimeLabel(Math.abs(timeLeftInMs));

  return (
    <Typography size="14/14">
      {timeLeftInMs < 0 ? "Просрочен на " : "До выдачи "}
      {timeLeft}
    </Typography>
  );
};
