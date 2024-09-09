import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { ordersSelectors } from "$api";
import { useSelector } from "react-redux";
import { Flex, Grid, theme } from "@book-eat/ui";
import { Id } from "./Id";
import { DeliveryType } from "./DeliveryType";
import { Cost } from "./Cost";
import { ReadyTime } from "./ReadyTime";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "$constants";

interface IProps {
  id: EntityId;
}

export const Item: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { id } = props;
  const order = useSelector((state) => ordersSelectors.selectById(state, id))!;

  const handleClick = () => {
    navigate(navigateToPage(PageURLS.OrdersEdit, { id }));
  };

  return (
    <Grid
      gridTemplateColumns="repeat(4, 1fr)"
      gap={6}
      padding={16}
      borderRadius={15}
      background={theme.colors.general50}
      onClick={handleClick}
    >
      <Id id={id} />
      <DeliveryType id={id} />
      <Cost id={id} />
      <ReadyTime id={id} />
    </Grid>
  );
};
