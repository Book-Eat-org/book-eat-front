import { useCallback } from "react";

import Item from "./Item";
import { BackIcon24, Flex, Grid, PlusIcon24, SettingsIcon24, theme } from "@book-eat/ui";
import { isNil } from "ramda";
import { categoriesEndpoints } from "@book-eat/api";
import { useNavigate } from "react-router-dom";
import { Page } from "$components";
import { navigateToPage, PageURLS } from "$constants";

export const List = () => {
  const navigate = useNavigate();

  const { isLoading, data } = categoriesEndpoints.useFetchCategoriesQuery();

  const onBackClick = useCallback(() => navigate(".."), []);
  
  const handleAddCLick = useCallback(() => 
    navigate(navigateToPage(PageURLS.CategoriesCreate, {}))
  , []);

  const handleSettingsClick = useCallback(() => 
    navigate(navigateToPage(PageURLS.CategoriesSettings, {}))
  , []);

  if (isLoading || isNil(data)) {
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
          <Flex gap={1}>
            <Flex
              backgroundColor={theme.colors.accent50}
              borderRadius={10}
              padding="6px"
            >
              <SettingsIcon24 onClick={handleSettingsClick} />
            </Flex>
            <Flex
              backgroundColor={theme.colors.accent50}
              borderRadius={10}
              padding="6px"
            >
              <PlusIcon24 onClick={handleAddCLick} />
            </Flex>
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Категории</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={4}>
          {data?.ids.map((id) => (
            <Item id={id} key={id} />
          ))}
        </Grid>
      </Page.Body>
    </Page>
  );
};
