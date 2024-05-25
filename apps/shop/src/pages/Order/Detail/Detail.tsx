import { BackIcon24, Flex, Grid, Page, theme } from "@book-eat/ui";
import { useNavigate } from "react-router-dom";
import { Composition } from "./Composition";
import { Details } from "./Details";

export const Detail = () => {
  const navigate = useNavigate();
  const onBackClick = () => navigate("/");

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
        </Page.Header.Buttons>
        <Page.Header.Title>Оформление заказа</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid>
          <Composition />
          <Details />
        </Grid>
      </Page.Body>
    </Page>
  );
};
