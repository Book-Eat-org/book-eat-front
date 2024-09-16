import { useNavigate } from "react-router-dom";
import { BackIcon24, Flex, Page, theme } from "@book-eat/ui";
import { placesEndpoints } from "@book-eat/api";
import { Body } from "./Body";

export const Create = () => {
  const navigate = useNavigate();

  const { isFetching } = placesEndpoints.useFetchPlacesQuery();

  const onBackClick = () => navigate(-1);

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
        </Page.Header.Buttons>
        <Page.Header.Title>Оформление заказа</Page.Header.Title>
      </Page.Header>
      <Page.Body>{isFetching ? <div>loading</div> : <Body />}</Page.Body>
    </Page>
  );
};
