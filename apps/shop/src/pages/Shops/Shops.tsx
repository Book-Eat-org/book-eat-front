import { FC, useState } from "react";
import List from "./List";
import Header from "./Header";
import Search from "./Search";
import { BackIcon24, Flex, Grid, NewPage, SearchInput, theme, useSearchOutside } from "@book-eat/ui";
import { ShopsContext } from "./context.ts";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";

const Shops: FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

  const onBackClick = () => navigate("..");

  const onOpenSearch = () => setActiveSearch(true);

  const onCloseSearch = () => {
    setSearchValue("");
    setActiveSearch(false);
  }

  const { searchRef } = useSearchOutside(activeSearch, onCloseSearch);

  return (
    <ShopsContext.Provider value={{ searchValue, setSearchValue }}>
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
            <NewPage.Header.Top>
              <NewPage.Header.Top.Left>
                <Flex
                  backgroundColor={theme.colors.accent50}
                  borderRadius={10}
                  padding="6px"
                >
                  <BackIcon24 onClick={onBackClick} />
                </Flex>
              </NewPage.Header.Top.Left>
              <NewPage.Header.Top.Central>
                <PageHeader />
              </NewPage.Header.Top.Central>
              <NewPage.Header.Top.Right>
                <Search onClick={onOpenSearch} />
              </NewPage.Header.Top.Right>
            </NewPage.Header.Top>
          </SearchInput>
        </NewPage.Header>
        <NewPage.Body>
          <Grid>
            <Header />
            <List />
          </Grid>
        </NewPage.Body>
      </NewPage>
    </ShopsContext.Provider>
  );
};

export default Shops;
