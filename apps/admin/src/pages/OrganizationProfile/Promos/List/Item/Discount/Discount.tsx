import { Flex, theme, Typography } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { useSelector } from "react-redux";
import { promoCodesSelectors } from "$store";
import { isNil } from "ramda";

interface IProps {
  id: EntityId;
}

export const Discount: FC<IProps> = (props) => {
  const { id } = props;

  const item = useSelector((state) =>
    promoCodesSelectors.selectById(state, id),
  );

  if (isNil(item)) {
    return null;
  }

  const { discount } = item;

  return (
    <Flex
      borderRadius={5}
      px={2}
      py={1}
      gap={1}
      background={theme.colors.accent500}
    >
      <Typography fontWeight={600} size="12/12" color={theme.colors.general50}>
        - {discount}%
      </Typography>
    </Flex>
  );
};
