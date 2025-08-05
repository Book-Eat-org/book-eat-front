import { FC } from "react";
import { Button, Grid } from "@book-eat/ui";
import { Items } from "./Items";
import { Totals } from "./Totals";
import { navigateToPage, PageURLS } from "../../../constants/urls.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "$hooks";
import { isEmpty } from "ramda";
import { EntityId } from "@reduxjs/toolkit";
import { Empty } from "./Empty";
import { PromoCode } from "./PromoCode";

export const Body: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: EntityId };
  const onSubmit = () => navigate(navigateToPage(PageURLS.ORDERS_CREATE, {}));

  const cartItems = useSelector((state) => state.cart);

  if (isEmpty(cartItems)) return <Empty />;

  const shouldShowEmpty = id !== cartItems.shopId || isEmpty(cartItems.items);
  
  if (shouldShowEmpty) {
    return <Empty />;
  }

  return (
    <Grid gap={4}>
      <Grid gap={6}>
        <Items />
      </Grid>
      <PromoCode />
      <Totals />
      <Button onClick={onSubmit}>Продолжить</Button>
    </Grid>
  );
};
