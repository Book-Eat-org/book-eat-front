import { isNil } from "ramda";
import { FC } from "react";

import classes from "./Item.module.css";
import { Grid, TrashIcon, Typography } from "@book-eat/ui";
import { cashiersEndpoints, cashiersSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = ({ id }) => {
  const [trigger] = cashiersEndpoints.endpoints.deleteCashiers.useMutation();

  const item = useSelector((state) => cashiersSelectors.selectById(state, id));

  if (isNil(item)) {
    return null;
  }

  const deleteCashier = () => {
    trigger([id]);
  };

  const { phone, login } = item;

  return (
    <Grid
      gridTemplateColumns="auto max-content"
      padding="0 0 10px"
      className={classes.wrapper}
    >
      <Grid gap={2}>
        <Typography size="14/14" fontWeight={600}>
          {login}
        </Typography>
        <Typography size="14/14">{phone}</Typography>
      </Grid>
      <TrashIcon onClick={deleteCashier} />
    </Grid>
  );
};

export default Item;
