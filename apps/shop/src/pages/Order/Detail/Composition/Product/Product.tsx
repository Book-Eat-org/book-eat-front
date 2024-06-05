import { FC } from "react";
import { Flex, Grid, Typography, theme } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { ORDER_DATA } from "../../data.ts";
import { menuSelectors } from "@book-eat/api";
import { useSelector } from "$hooks";
import { Additions } from "./Additions";

interface IProps {
  id: EntityId;
}

export const Product: FC<IProps> = (props) => {
  const { id } = props;
  const item = ORDER_DATA.products.find((product) => product.id === id)!;
  const product = useSelector((state) => menuSelectors.selectById(state, id));

  return (
    <Grid gap={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap={3} alignItems="center">
          <Flex
            background={theme.colors.primary100}
            padding={1}
            borderRadius={5}
            alignItems="center"
          >
            <Typography
              fontWeight={600}
              size="12/12"
              color={theme.colors.general30}
            >
              {item.amount}
            </Typography>
          </Flex>
          <Typography fontWeight={600} size="12/12">
            {product?.title}
          </Typography>
        </Flex>
        <Typography fontWeight={600} size="12/12">
          {product.price} р
        </Typography>
      </Flex>
      <Additions />
    </Grid>
  );
};
