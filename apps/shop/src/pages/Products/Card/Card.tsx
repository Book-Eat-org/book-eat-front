import { BackIcon24, Flex, Page, theme } from "@book-eat/ui";
import { menuEndpoints } from "@book-eat/api";
import { useNavigate, useParams } from "react-router-dom";
import { Body } from "./Body";

export const Card = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFetching } = menuEndpoints.useGetMenuByIdQuery(id!);

  if (isFetching) {
    return null;
  }

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
        <Page.Header.Title>Продукт</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Body />
      </Page.Body>
    </Page>
  );
};
