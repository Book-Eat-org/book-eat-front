import { FC, useState } from "react";
import List from "./List";
import Header from "./Header";
import { Flex, Grid, NewPage, theme, Typography } from "@book-eat/ui";
import { OrganizationsContext } from "./context.ts";
import { organizationsEndpoints } from "@book-eat/api";

export const Items: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  organizationsEndpoints.useGetOrganisationsQuery();

  return (
    <OrganizationsContext.Provider value={{ searchValue, setSearchValue }}>
      <NewPage>
        <NewPage.Header>
          <NewPage.Header.Title>
            <Flex paddingTop={10}>
              <Typography
                fontWeight={600}
                size="26/26"
                color={theme.colors.general50}
              >
                Book-Eat
              </Typography>
            </Flex>
          </NewPage.Header.Title>
        </NewPage.Header>
        <NewPage.Body>
          <Grid>
            <Header />
            <List />
          </Grid>
        </NewPage.Body>
      </NewPage>
    </OrganizationsContext.Provider>
  );
};

export default Items;
