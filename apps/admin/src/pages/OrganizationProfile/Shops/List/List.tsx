import { FC, useCallback } from "react";
import Item from "./Item";
import { BackIcon24, Flex, Grid, PlusIcon24, theme } from "@book-eat/ui";
import { placesEndpoints } from "$api";
import { useNavigate } from "react-router-dom";
import { Page } from "$components";
import { navigateToPage, PageURLS } from "$constants";
import { getCurrentOrganizationSelector } from "../../../../store/entities";
import { useSelector } from "react-redux";

export const List: FC = () => {
  const organization = useSelector(getCurrentOrganizationSelector);

  const { data } = placesEndpoints.useFetchPlacesByOrganizationQuery(
    organization.id,
  );

  const navigate = useNavigate();

  const onBackClick = useCallback(() => navigate(".."), []);
  const handleAddCLick = () =>
    navigate(navigateToPage(PageURLS.ShopsCreate, {}));

  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons>
          <Flex
            backgroundColor={theme.colors.primary90}
            borderRadius={10}
            padding="6px"
          >
            <BackIcon24 onClick={onBackClick} />
          </Flex>
          <Flex
            backgroundColor={theme.colors.primary90}
            borderRadius={10}
            padding="6px"
          >
            <PlusIcon24 onClick={handleAddCLick} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Заведения</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={3}>{data?.ids.map((id) => <Item key={id} id={id} />)}</Grid>
      </Page.Body>
    </Page>
  );
};
