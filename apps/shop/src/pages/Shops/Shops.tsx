import { FC, useState } from "react";
import List from "./List";
import Header from "./Header";
import { BackIcon24, Flex, Grid, Page, theme } from "@book-eat/ui";
import { ShopsContext } from "./context.ts";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";

const Shops: FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const onBackClick = () => navigate("..");

  return (
    <ShopsContext.Provider value={{ searchValue, setSearchValue }}>
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
