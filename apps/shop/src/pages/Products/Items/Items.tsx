import { FC, useEffect, useState } from "react";
import List from "./List";
import Header from "./Header";
import {
  BackIcon24,
  Flex,
  Grid,
  ListNavigation,
  NewPage,
  theme,
} from "@book-eat/ui";
import { OrganizationsContext } from "./context.ts";
import Footer from "./Footer";
import { menuEndpoints } from "@book-eat/api";
import { useNavigate, useParams } from "react-router-dom";
import { Cart } from "./Cart";
import PageHeader from "./PageHeader";
import { useDispatch } from "react-redux";
import { setActiveShop } from "../../../store/shop";

export const Items: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchValue, setSearchValue] = useState("");
  menuEndpoints.useGetMenuByPlaceIdQuery(id!);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveShop(id!));
  }, [id]);

  const onBackClick = () => navigate(-1);

  return (
    <ListNavigation.Provider>
      <OrganizationsContext.Provider value={{ searchValue, setSearchValue }}>
        <NewPage>
          <NewPage.Header>
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
                <Cart />
              </NewPage.Header.Top.Right>
            </NewPage.Header.Top>
          </NewPage.Header>
          <NewPage.Body padding="0">
            <Grid height="100%">
              <Header />
              <List />
              <Footer />
            </Grid>
          </NewPage.Body>
        </NewPage>
      </OrganizationsContext.Provider>
    </ListNavigation.Provider>
  );
};
