import { FC, useMemo, useState } from "react";

import List from "./List";
import { NewPage } from "@book-eat/ui";

import { Header } from "./Header";
import { OrdersPageContext } from "./context.ts";

const Items: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchModeActive, setSearchModeActive] = useState(false);

  const contextValue = useMemo(
    () => ({
      searchValue,
      setSearchValue,
      searchModeActive,
      setSearchModeActive,
    }),
    [searchValue, setSearchValue, searchModeActive, setSearchModeActive],
  );

  return (
    <OrdersPageContext.Provider value={contextValue}>
      <NewPage>
        <Header />
        <NewPage.Body>
          <List />
        </NewPage.Body>
      </NewPage>
    </OrdersPageContext.Provider>
  );
};

export default Items;
