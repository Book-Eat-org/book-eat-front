import { FC, useEffect, useState } from "react";
import List from "./List";
import Header from "./Header";
import {
  BackIcon24,
  Flex,
  Grid,
  ListNavigation,
  NewPage,
  SearchInput,
  useSearchOutside,
  theme,
} from "@book-eat/ui";
import { OrganizationsContext } from "./context.ts";
import { PopupProvider } from "./PopupProvider.tsx";
import Footer from "./Footer";
import { menuEndpoints } from "@book-eat/api";
import { useNavigate, useParams } from "react-router-dom";
import { Cart } from "./Cart";
import Search from "./Search";
import PageHeader from "./PageHeader";
import { useDispatch } from "react-redux";
import { setActiveShop } from "../../../store/shop";

export const Items: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  menuEndpoints.useGetMenuByPlaceIdQuery(id!);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveShop(id!));
  }, [id]);

  const onBackClick = () => navigate(-1);

  const onOpenSearch = () => setActiveSearch(true);

  const onCloseSearch = () => {
    setSearchValue("");
    setActiveSearch(false);
  };

  const { searchRef } = useSearchOutside(activeSearch, onCloseSearch);

  return (
    <ListNavigation.Provider>
      <OrganizationsContext.Provider value={{ searchValue, setSearchValue }}>
        <PopupProvider>
          <NewPage>
            <NewPage.Header>
              <SearchInput
                active={activeSearch} 
                onClick={onCloseSearch}
                value={searchValue}
                onChange={setSearchValue}
                placeholder="Найти блюдо"
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
                    <Flex 
                      position="absolute" 
                      right={0} 
                      gap={1}
                    >
                      <Search onClick={onOpenSearch} />
                      <Cart />
                    </Flex>
                  </NewPage.Header.Top.Right>
                </NewPage.Header.Top>
              </SearchInput>
            </NewPage.Header>
            <NewPage.Body padding="0">
              <Grid>
                <Header />
                <List />
                <Footer />
              </Grid>
            </NewPage.Body>
          </NewPage>
        </PopupProvider>
      </OrganizationsContext.Provider>
    </ListNavigation.Provider>
  );
};
