import { FC } from "react";
import { Flex, Grid, Typography, theme } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { Additions } from "./Additions";
import { useProduct } from "../../useProduct.ts";

interface IProps {
  id: EntityId;
}

export const Product: FC<IProps> = (props) => {
  const { id } = props;
  const product = useProduct(id);

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
              {product.amount}
            </Typography>
          </Flex>
          <Typography fontWeight={600} size="12/12">
            {product?.title}
          </Typography>
        </Flex>
        <Typography fontWeight={600} size="12/12">
          {product?.price} р
        </Typography>
      </Flex>
      <Additions />
    </Grid>
  );
};
