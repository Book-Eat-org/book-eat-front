import { BackIcon24, Button, Flex, Grid, Page, theme } from "@book-eat/ui";
import { useNavigate, useParams } from "react-router-dom";
import { Composition } from "./Composition";
import { Details } from "./Details";
import { menuEndpoints, ordersEndpoints } from "@book-eat/api";

export const Detail = () => {
  const { id: orderId } = useParams();
  const navigate = useNavigate();
  const onBackClick = () => navigate("/");
  const { isFetching } = menuEndpoints.useGetMenuByOrganizationQuery();
  ordersEndpoints.useGetOrderQuery(orderId!);

  if (isFetching) {
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
