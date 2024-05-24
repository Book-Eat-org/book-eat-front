import { FC, useEffect, useState } from "react";
import List from "./List";
import Header from "./Header";
import { BackIcon24, Flex, Grid, Page, theme } from "@book-eat/ui";
import { ShopsContext } from "./context.ts";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "../../constants/urls.ts";
import { placesEndpoints } from "@book-eat/api";
import PageHeader from "./PageHeader";

const Shops: FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { data, isSuccess } = placesEndpoints.useFetchPlacesQuery();

  const onBackClick = () => navigate("..");

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
          <Page.Header.Title>
            <PageHeader />
          </Page.Header.Title>
        </Page.Header>
        <Page.Body>
          <Grid>
            <Header />
            <List />
          </Grid>
        </Page.Body>
      </Page>
    </ShopsContext.Provider>
  );
};

export default Shops;
