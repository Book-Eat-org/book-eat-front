import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { ordersSelectors } from "$api";
import { useSelector } from "react-redux";
import { Flex, theme } from "@book-eat/ui";
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
    <Flex
      gap={6}
      padding={16}
      borderRadius={15}
      background={theme.colors.general500}
      onClick={handleClick}
    >
      <Id id={id} />
      <Flex justifyContent="space-between" width="100%">
        <Flex gap={4}>
          <DeliveryType id={id} />
          <Cost id={id} />
        </Flex>
        <ReadyTime id={id} />
      </Flex>
    </Flex>
  );
};
