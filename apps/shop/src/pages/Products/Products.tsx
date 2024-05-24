import { FC, useState } from "react";
import List from "./List";
import Header from "./Header";
import { BackIcon24, Flex, Grid, Page, theme } from "@book-eat/ui";
import { OrganizationsContext } from "./context.ts";
import Footer from "./Footer";
import { menuEndpoints } from "@book-eat/api";
import { useNavigate, useParams } from "react-router-dom";
import { Cart } from "./Cart";
import PageHeader from "./PageHeader";

const Products: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchValue, setSearchValue] = useState("");
  menuEndpoints.useGetMenuByOrganizationQuery(id);

  const onBackClick = () => navigate("..");

  return (
    <OrganizationsContext.Provider value={{ searchValue, setSearchValue }}>
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
            <Cart />
          </Page.Header.Buttons>
          <PageHeader />
        </Page.Header>
        <Page.Body>
          <Grid>
            <Header />
            <List />
            <Footer />
          </Grid>
        </Page.Body>
      </Page>
    </OrganizationsContext.Provider>
  );
};

export default Products;
