import { isNil } from "ramda";
import { FC, useMemo, useState } from "react";

import { UIGrid } from "@book-eat/ui";

import BurgerMenu from "./BurgerMenu";
import OrderCard from "./OrderCard";
import List from "./List";
import { OrdersContext } from "./context";
import Header from "../Header";
import { placesEndpoints } from "$api";

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
    <OrdersContext.Provider value={contextValue}>
      <UIGrid>
        <Header title="Заказы" burgerMenu={<BurgerMenu />} />
        <List />
      </UIGrid>
      {!isNil(activeOrderId) && <OrderCard />}
    </OrdersContext.Provider>
  );
};

export default Orders;
