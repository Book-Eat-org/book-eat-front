import { isNil } from "ramda";
import { FC, useMemo, useState } from "react";

import { ListNavigation } from "@book-eat/ui";

import OrderCard from "./OrderCard";
import List from "./List";
import { OrdersContext } from "./context";
import { placesEndpoints } from "$api";
import BurgerMenu from "./BurgerMenu";
import Nav from "./Nav";
import { Page } from "$components";

const Orders: FC = () => {
  const [placeId, setPlaceId] = useState<number | undefined>();
  const [activeOrderId, setActiveOrderId] = useState<number | undefined>();

  placesEndpoints.useFetchPlacesByOrganizationQuery();

  const contextValue = useMemo(
    () => ({
      setPlaceId,
      placeId,
      activeOrderId,
      setActiveOrderId,
      companyId: placeId ? String(placeId) : undefined,
    }),
    [placeId, setPlaceId, activeOrderId, setActiveOrderId],
  );

  return (
    <Page>
      <Page.Header>
        <Page.Header.Title>Заказы</Page.Header.Title>
        <BurgerMenu />
        <Nav />
      </Page.Header>
      <Page.Body>
        <ListNavigation.Provider>
          <OrdersContext.Provider value={contextValue}>
            <List />
            {!isNil(activeOrderId) && <OrderCard />}
          </OrdersContext.Provider>
        </ListNavigation.Provider>
      </Page.Body>
    </Page>
  );
};

export default Orders;
