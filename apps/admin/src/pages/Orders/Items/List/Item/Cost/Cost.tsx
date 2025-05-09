import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { ordersSelectors } from "$api";
import { Flex, Typography, theme } from "@book-eat/ui";
import { SYMBOLS } from "@book-eat/utils";

interface IProps {
  id: EntityId;
}

export const Cost: FC<IProps> = ({ id }) => {
  const { totalCost } = useSelector((state) =>
    ordersSelectors.selectById(state, id),
  )!;

  return (
    <Flex gap={3}>
      <Typography size="14/14" color={theme.colors.general600}>
        •
      </Typography>
      <Typography size="14/14">
        {totalCost}{" "}
        <Typography size="14/14" color={theme.colors.general600}>
          {SYMBOLS.RUB}
        </Typography>
      </Typography>
      <Typography size="14/14" color={theme.colors.general600}>
        •
      </Typography>
    </Flex>
  );
};
