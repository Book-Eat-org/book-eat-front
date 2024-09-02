import { FC } from "react";
import { Flex, Grid, Typography, theme } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { Additions } from "./Additions";
import { useSelector } from "react-redux";
import { productsSelectors } from "../../../../../store/entities";
import { isNil } from "ramda";
import { SYMBOLS } from "@book-eat/utils";

interface IProps {
  id: EntityId;
}

export const Product: FC<IProps> = (props) => {
  const { id } = props;
  const product = useSelector((state) =>
    productsSelectors.selectById(state, id),
  );

  if (isNil(product)) {
    return null;
  }

  const { price, amount, title } = product;

  return (
    <Grid gap={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap={3} alignItems="center">
          <Flex
            background={theme.colors.accent600}
            padding={"4px 8px"}
            borderRadius={5}
            alignItems="center"
          >
            <Typography
              fontWeight={600}
              size="12/12"
              color={theme.colors.general500}
            >
              x {amount}
            </Typography>
          </Flex>
          <Typography fontWeight={600} size="12/12">
            {title}
          </Typography>
        </Flex>
        <Typography fontWeight={600} size="12/12">
          {price * amount} {SYMBOLS.RUB}
        </Typography>
      </Flex>
      <Additions productId={id} />
    </Grid>
  );
};
