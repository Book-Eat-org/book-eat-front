import { Grid, Typography } from "@book-eat/ui";
import { Addition } from "./Addition";
import { theme } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { useProduct } from "../../../useProduct.ts";
import { isEmpty, isNil } from "ramda";

interface IProps {
  productId: EntityId;
}

export const Additions: FC<IProps> = (props) => {
  const { productId } = props;

  const product = useProduct(productId);

  const { additions } = product;

  if (isNil(additions) || isEmpty(additions)) {
    return null;
  }

  return (
    <Grid gap={1}>
      <Typography size="14/14" color={theme.colors.general600}>
        Добавки:
      </Typography>
      {additions.map((item) => (
        <Addition key={item.id} id={item.id} productId={productId} />
      ))}
    </Grid>
  );
};
