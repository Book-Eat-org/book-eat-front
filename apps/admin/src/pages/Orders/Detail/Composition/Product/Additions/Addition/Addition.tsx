import { Flex, theme, Typography } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { useSelector } from "react-redux";
import { SYMBOLS } from "@book-eat/utils";
import { additionsSelectors } from "../../../../../../../store/entities";

interface IProps {
  id: EntityId;
}

export const Addition: FC<IProps> = (props) => {
  const { id } = props;

  const item = useSelector((state) =>
    additionsSelectors.selectById(state, id),
  )!;

  const { title, price } = item;

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Typography size="14/14" color={theme.colors.general90}>
        {title}
      </Typography>
      <Typography size="14/14" color={theme.colors.general90}>
        {price} {SYMBOLS.RUB}
      </Typography>
    </Flex>
  );
};
