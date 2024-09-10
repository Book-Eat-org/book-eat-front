import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { ordersSelectors } from "$api";
import { useSelector } from "react-redux";
import { Grid, theme } from "@book-eat/ui";
import { Id } from "./Id";
import { DeliveryType } from "./DeliveryType";
import { Cost } from "./Cost";
import { ReadyTime } from "./ReadyTime";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "$constants";
import { getColorByReadyTime } from "./utils.ts";
import { isNil } from "ramda";

interface IProps {
  id: EntityId;
}

export const Item: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { id } = props;
  const { readyTime } = useSelector((state) =>
    ordersSelectors.selectById(state, id),
  )!;

  const handleClick = () => {
    navigate(navigateToPage(PageURLS.OrdersEdit, { id }));
  };

  const color = isNil(readyTime)
    ? theme.colors.general50
    : getColorByReadyTime(readyTime);

  return (
    <Grid
      gridTemplateColumns="repeat(4, 1fr)"
      gap={6}
      padding={16}
      borderRadius={15}
      background={color}
      onClick={handleClick}
    >
      <Id id={id} />
      <DeliveryType id={id} />
      <Cost id={id} />
      <ReadyTime id={id} />
    </Grid>
  );
};
