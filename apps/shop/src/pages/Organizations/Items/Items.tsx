import { FC, useState } from "react";
import List from "./List";
import Header from "./Header";
import { Grid, Page, Typography } from "@book-eat/ui";
import { OrganizationsContext } from "./context.ts";
import { organizationsEndpoints } from "@book-eat/api";

export const Items: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  organizationsEndpoints.useGetOrganisationsQuery();

  return (
    <OrganizationsContext.Provider value={{ searchValue, setSearchValue }}>
      <Page>
        <Page.Header>
          <Page.Header.Title>
            <Typography fontWeight={600} size="26/26">
              Book-Eat
            </Typography>
          </Page.Header.Title>
        </Page.Header>
        <Page.Body>
          <Grid>
            <Header />
            <List />
          </Grid>
        </Page.Body>
      </Page>
    </OrganizationsContext.Provider>
  );
};

export default Items;
