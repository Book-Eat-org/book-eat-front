import { Grid, Typography } from "@book-eat/ui";
import { Addition } from "./Addition";
import { theme } from "@book-eat/ui";
import { FC } from "react";
import { useSelector } from "react-redux";
import { productsSelectors } from "../../../../../../store/entities";
import { isEmpty, isNil } from "ramda";
import { EntityId } from "@reduxjs/toolkit";
import { IProduct } from "@book-eat/api";

interface IProps {
  productId: EntityId;
}

export const Additions: FC<IProps> = (props) => {
  const { productId } = props;

  const { additions } =
    useSelector((state) => productsSelectors.selectById(state, productId)) ??
    ({} as IProduct);

  if (isEmpty(additions) || isNil(additions)) {
    return null;
  }

  return (
    <Grid gap={1}>
      <Typography size="14/14" color={theme.colors.general600}>
        Добавки:
      </Typography>
      {additions.map(({ id }) => (
        <Addition key={id} id={id} />
      ))}
    </Grid>
  );
};
