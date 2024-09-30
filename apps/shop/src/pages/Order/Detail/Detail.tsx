import { BackIcon24, Flex, Grid, Page, theme } from "@book-eat/ui";
import { useNavigate, useParams } from "react-router-dom";
import { Composition } from "./Composition";
import { Details } from "./Details";
import { ordersEndpoints, menuEndpoints, placesEndpoints } from "@book-eat/api";
import { useEffect } from "react";
import { isNil, values } from "ramda";
import { Submit } from "./Submit";

export const Detail = () => {
  const { id: orderId } = useParams();
  const navigate = useNavigate();
  const onBackClick = () => navigate("/");
  const { data: orderData, isFetching: isFetchingOrder } =
    ordersEndpoints.useGetOrderQuery(orderId!);
  const [triggerProducts, { data: productsData }] =
    menuEndpoints.useLazyGetMenuByPlaceIdQuery();
  const { isFetching: isFetchingPlaces } =
    placesEndpoints.useFetchPlacesQuery();

  const placeId = values(orderData?.entities ?? {})[0]?.places?.id;

  useEffect(() => {
    if (placeId) {
      triggerProducts(placeId);
    }
  }, [placeId]);

  if (isFetchingOrder || isFetchingPlaces || !placeId || isNil(productsData)) {
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
        <Page.Header.Title>
          Заказ №{values(orderData.entities)[0].orderNumber}
        </Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={12}>
          <Grid gap={8}>
            <Details />
            <Composition />
          </Grid>
          <Submit />
        </Grid>
      </Page.Body>
    </Page>
  );
};
