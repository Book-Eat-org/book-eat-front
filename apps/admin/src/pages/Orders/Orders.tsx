import { isNil } from "ramda";
import { FC, useMemo, useState } from "react";

import { ListNavigation, Page } from "@book-eat/ui";

import BurgerMenu from "./BurgerMenu";
import OrderCard from "./OrderCard";
import List from "./List";
import { OrdersContext } from "./context";
import { placesEndpoints } from "$api";
import Nav from "./Nav";

const Orders: FC = () => {
  const [placeId, setPlaceId] = useState<number | undefined>();
  const [activeOrderId, setActiveOrderId] = useState<number | undefined>();

  placesEndpoints.useFetchPlacesQuery();

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
    <ListNavigation.Provider>
      <OrdersContext.Provider value={contextValue}>
        <Page
          withoutPaddings
          header={
            <Page.Header backgroundColor="white">
              <Page.Title>Заказы</Page.Title>
              <BurgerMenu />
              <Nav />
            </Page.Header>
          }
        >
          <List />
          {!isNil(activeOrderId) && <OrderCard />}
        </Page>
      </OrdersContext.Provider>
    </ListNavigation.Provider>
  );
};

export default Orders;
