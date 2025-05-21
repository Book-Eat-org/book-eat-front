import { Button, Grid } from "@book-eat/ui";
import { Items } from "./Items";
import { Totals } from "./Totals";
import { navigateToPage, PageURLS } from "../../../constants/urls.ts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "$hooks";
import { isEmpty } from "ramda";
import { Empty } from "./Empty";
import { PromoCode } from "./PromoCode";

export const Body = () => {
  const navigate = useNavigate();
  const onSubmit = () => navigate(navigateToPage(PageURLS.ORDERS_CREATE, {}));

  const cartItems = useSelector((state) => state.cart);

  if (isEmpty(cartItems.items)) {
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
