import { useNavigate } from "react-router-dom";
import { BackIcon24, Button, Flex, Grid, Page, theme } from "@book-eat/ui";
import { Items } from "./Items";
import { Totals } from "./Totals";
import { navigateToPage, PageURLS } from "../../constants/urls.ts";
import { useSelector } from "$hooks";
import { additionsEndpoints, menuEndpoints } from "@book-eat/api";
import { flatten, isEmpty, values } from "ramda";
import { useEffect, useMemo } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const onBackClick = () => navigate(-1);
  const onSubmit = () => navigate(navigateToPage(PageURLS.ORDERS_CREATE, {}));
  const cart = useSelector((state) => state.cart);
  const additionsIds = useMemo(
    () => flatten(values(cart.items).map((item) => item.additionIds)),
    [],
  );
  const [triggerAdditions] =
    additionsEndpoints.useFetchAdditionsByIdsMutation();

  useEffect(() => {
    if (!isEmpty(additionsIds)) {
      triggerAdditions(additionsIds);
    }
  }, [additionsIds]);

  const { isSuccess } = menuEndpoints.useGetMenuByPlaceIdQuery(cart.shopId);

  if (!isSuccess) {
    return null;
  }

  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons>
          <Flex
            backgroundColor={theme.colors.accent50}
            borderRadius={10}
            padding="6px"
          >
            <BackIcon24 onClick={onBackClick} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Корзина</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <div>
          <Grid gap={4}>
            <Grid gap={6}>
              <Items />
            </Grid>
            <Totals />
            <Button onClick={onSubmit}>Продолжить</Button>
          </Grid>
        </div>
      </Page.Body>
    </Page>
  );
};

export default Cart;
