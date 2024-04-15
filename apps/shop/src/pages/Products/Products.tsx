import { FC, useState } from "react";
import { organizationsEndpoints } from "$api";
import List from "./List";
import { Page } from "$components";
import Header from "./Header";
import { Grid } from "@book-eat/ui";
import PageHeader from "./PageHeader";
import { OrganizationsContext } from "./context.ts";
import Footer from "./Footer";

const Products: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  organizationsEndpoints.useGetOrganisationQuery();

  return (
    <OrganizationsContext.Provider value={{ searchValue, setSearchValue }}>
      <Page header={<PageHeader />}>
        <Grid>
          <Header />
          <List />
          <Footer />
        </Grid>
      </Page>
    </OrganizationsContext.Provider>
  );
};

export default Products;
