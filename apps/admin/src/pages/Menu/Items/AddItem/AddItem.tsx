import { useNavigate, useParams } from "react-router-dom";
import { menuEndpoints } from "$api";
import { useEffect } from "react";
import { BackIcon24, Flex, Loader, theme } from "@book-eat/ui";
import { Form } from "./Form";
import { Page } from "$components";

export const AddItem = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const navigateBack = () => navigate("..");

  const [triggerGetDetailMenu, { isSuccess }] =
    menuEndpoints.useLazyGetMenuByIdQuery();

  useEffect(() => {
    if (id) {
      triggerGetDetailMenu(id);
    }
  }, [id, triggerGetDetailMenu]);

  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons>
          <Flex
            backgroundColor={theme.colors.primary90}
            borderRadius={10}
            padding="6px"
          >
            <BackIcon24 onClick={navigateBack} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Меню</Page.Header.Title>
      </Page.Header>
      <Page.Body>{isSuccess ? <Form /> : <Loader />}</Page.Body>
    </Page>
  );
};
