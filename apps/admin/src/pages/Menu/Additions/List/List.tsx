import { isNil } from "ramda";
import { useCallback } from "react";

import Item from "./Item";
import { useNavigate } from "react-router-dom";
import { BackIcon24, Flex, Grid, PlusIcon24, theme } from "@book-eat/ui";
import { additionsEndpoints } from "$api";
import { Page } from "$components";
import { navigateToPage, PageURLS } from "$constants";

export const List = () => {
  const navigate = useNavigate();

  const { isLoading, data } = additionsEndpoints.useFetchAdditionsQuery();

  const onBackClick = useCallback(() => navigate(".."), []);
  const handleAddCLick = useCallback(
    () => navigate(navigateToPage(PageURLS.AdditionsCreate, {})),
    [],
  );

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
          <Flex
            backgroundColor={theme.colors.accent50}
            borderRadius={10}
            padding="6px"
          >
            <PlusIcon24 onClick={handleAddCLick} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Добавки</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={3}>
          {data?.ids.map((id) => (
            <Item id={id} key={id} />
          ))}
        </Grid>
      </Page.Body>
    </Page>
  );
};
