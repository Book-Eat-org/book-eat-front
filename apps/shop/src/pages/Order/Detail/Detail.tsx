import { BackIcon24, Button, Flex, Grid, Page, theme } from "@book-eat/ui";
import { useNavigate, useParams } from "react-router-dom";
import { Composition } from "./Composition";
import { Details } from "./Details";
import { ordersEndpoints, menuEndpoints } from "@book-eat/api";
import { useEffect } from "react";
import { isNil, values } from "ramda";

export const Detail = () => {
  const { id: orderId } = useParams();
  const navigate = useNavigate();
  const onBackClick = () => navigate("/");
  const { data: orderData, isFetching } = ordersEndpoints.useGetOrderQuery(
    orderId!,
  );
  const [trigger, { data: productsData }] =
    menuEndpoints.useLazyGetMenuByPlaceIdQuery();

  const placeId = values(orderData?.entities ?? {})[0]?.places?.id;

  console.log(productsData);

  useEffect(() => {
    if (placeId) {
      trigger(placeId);
    }
  }, [placeId]);

  if (isFetching || !placeId || isNil(productsData)) {
    return null;
  }

  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons>
          <Flex
            backgroundColor={theme.colors.primary90}
            borderRadius={10}
            padding="6px"
          >
            <BackIcon24 onClick={onBackClick} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Оформление заказа</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={12}>
          <Grid gap={8}>
            <Details />
            <Composition />
          </Grid>
          <Button>Оплатить</Button>
        </Grid>
      </Page.Body>
    </Page>
  );
};
