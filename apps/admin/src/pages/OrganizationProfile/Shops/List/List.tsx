import { FC, useCallback } from "react";
import { BackIcon24, Flex, PlusIcon24, theme, Typography } from "@book-eat/ui";
import { useNavigate } from "react-router-dom";
import { Page } from "$components";
import { navigateToPage, PageURLS } from "$constants";
import { Body } from "./Body";

export const List: FC = () => {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => navigate(".."), []);
  const handleAddCLick = () =>
    navigate(navigateToPage(PageURLS.ShopsCreate, {}));

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
        <Page.Header.Title>
          <Typography fontWeight={500} size="52/52">
            Заведения
          </Typography>
        </Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Body />
      </Page.Body>
    </Page>
  );
};
