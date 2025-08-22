import { FC, useState } from "react";
import List from "./List";
import Search from "./Search";
import Header from "./Header";
import { Flex, Grid, NewPage, theme, Typography, SearchInput, useSearchOutside } from "@book-eat/ui";
import { OrganizationsContext } from "./context.ts";
import { organizationsEndpoints } from "@book-eat/api";
import { useSelector } from "react-redux";
import { organizationsSelectors } from "@book-eat/api";

export const Items: FC = () => {
  organizationsEndpoints.useGetOrganisationsQuery();

  const ids = useSelector(organizationsSelectors.selectIds);
  const isSearchAvailable = ids.length > 5;

  const [searchValue, setSearchValue] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

  const onOpenSearch = () => setActiveSearch(true);

  const onCloseSearch = () => {
    setSearchValue("");
    setActiveSearch(false);
  }

  const { searchRef } = useSearchOutside(activeSearch, onCloseSearch);

  return (
    <OrganizationsContext.Provider value={{ searchValue, setSearchValue }}>
      <NewPage>
        <NewPage.Header>
          <SearchInput
            active={activeSearch} 
            onClick={onCloseSearch}
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Найти ресторан"
            containerRef={searchRef}
          >
            <Flex alignItems="center" justifyContent="space-between">
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
              {isSearchAvailable && <Search onClick={onOpenSearch} />}
            </Flex>
          </SearchInput>
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
