import { Grid, Page } from "@book-eat/ui";
import { useParams } from "react-router-dom";
import { Composition } from "./Composition";
import { Details } from "./Details";
import { menuEndpoints, ordersEndpoints } from "$api";
import { Submit } from "./Submit";
import { useOrder } from "./useOrder.ts";
import { isNil } from "ramda";
import { PageHeader } from "./PageHeader";
import { Header } from "./Header";

export const Detail = () => {
  const { id: orderId } = useParams();
  const { isFetching } = menuEndpoints.useGetMenuByOrganizationQuery();
  ordersEndpoints.useGetOrderQuery(orderId!);
  const order = useOrder();

  if (isFetching || isNil(order)) {
    return null;
  }

  return (
    <Page>
      <PageHeader />
      <Page.Body>
        <Grid gap={4}>
          <Header />
          <Grid gap={12}>
            <Grid gap={8}>
              <Composition />
              <Details />
            </Grid>
            <Submit />
          </Grid>
        </Grid>
      </Page.Body>
    </Page>
  );
};
