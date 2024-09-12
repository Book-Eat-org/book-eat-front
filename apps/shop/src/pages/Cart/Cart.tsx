import { useNavigate } from "react-router-dom";
import { BackIcon24, Flex, Page, theme } from "@book-eat/ui";
import { useSelector } from "$hooks";
import { additionsEndpoints, menuEndpoints } from "@book-eat/api";
import { flatten, isEmpty, values } from "ramda";
import { useEffect, useMemo } from "react";
import { Body } from "./Body";

const Cart = () => {
  const navigate = useNavigate();
  const onBackClick = () => navigate(-1);
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
        <Body />
      </Page.Body>
    </Page>
  );
};

export default Cart;
