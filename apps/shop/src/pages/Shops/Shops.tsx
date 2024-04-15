import { FC, useEffect, useState } from "react";
import { placesEndpoints } from "$api";
import List from "./List";
import { Page } from "$components";
import Header from "./Header";
import { Grid } from "@book-eat/ui";
import PageHeader from "./PageHeader";
import { ShopsContext } from "./context.ts";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "../../constants/urls.ts";

const Shops: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isSuccess } = placesEndpoints.useFetchPlacesQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSuccess) {
      return;
    }
    if (data.ids.length === 1) {
      const url = navigateToPage(PageURLS.PRODUCTS, {
        id: data.entities[0]?.id ?? "test",
      });
      navigate(url);
    }
  }, [data, isSuccess]);

  return (
    <ShopsContext.Provider value={{ searchValue, setSearchValue }}>
      <Page header={<PageHeader />}>
        <Grid>
          <Header />
          <List />
        </Grid>
      </Page>
    </ShopsContext.Provider>
  );
};

export default Shops;
