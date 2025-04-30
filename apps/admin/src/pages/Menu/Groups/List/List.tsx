import { useCallback } from "react";

import Item from "./Item";
import { BackIcon24, Flex, Grid, PlusIcon24, theme } from "@book-eat/ui";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Page } from "$components";
import { navigateToPage, PageURLS } from "$constants";
import { categoriesEndpoints } from "@book-eat/api";
import { categoriesSelectors } from "$store";

export const List = () => {
  const navigate = useNavigate();

  const { isLoading } = categoriesEndpoints.useFetchCategoriesQuery();

  const data = useSelector(categoriesSelectors.selectAll);
  console.log(data, isLoading);

  const onBackClick = useCallback(() => navigate(".."), []);
  const handleAddCLick = useCallback(
    () => navigate(navigateToPage(PageURLS.CategoriesCreate, {})),
    [],
  );

  if (isLoading) {
    return null;
  }

  return (
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
          <Flex
            backgroundColor={theme.colors.accent50}
            borderRadius={10}
            padding="6px"
          >
            <PlusIcon24 onClick={handleAddCLick} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Категории</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={4}>
          {data.map(({ id }) => (
            <Item id={id} key={id} />
          ))}
        </Grid>
      </Page.Body>
    </Page>
  );
};
