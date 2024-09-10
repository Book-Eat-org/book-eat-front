import { useNavigate, useParams } from "react-router-dom";
import { menuEndpoints } from "$api";
import { useEffect } from "react";
import { BackIcon24, Flex, Loader, theme, TrashIcon } from "@book-eat/ui";
import { Form } from "./Form";
import { Page } from "$components";
import { isNotNil } from "ramda";

export const AddItem = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const navigateBack = () => navigate("..");

  const [triggerGetDetailMenu, { isSuccess }] =
    menuEndpoints.useLazyGetMenuByIdQuery();
  const [triggerDeleteMenu] = menuEndpoints.useDeleteMenuMutation();

  useEffect(() => {
    if (id) {
      triggerGetDetailMenu(id);
    }
  }, [id, triggerGetDetailMenu]);

  const handleDelete = async () => {
    await triggerDeleteMenu(id!);
    navigateBack();
  };

  const loading = isNotNil(id) && !isSuccess;

  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons>
          <Flex
            backgroundColor={theme.colors.accent50}
            borderRadius={10}
            padding="6px"
          >
            <BackIcon24 onClick={navigateBack} />
          </Flex>
          {isNotNil(id) && (
            <Flex
              backgroundColor={theme.colors.accent50}
              borderRadius={10}
              padding="6px"
            >
              <TrashIcon onClick={handleDelete} />
            </Flex>
          )}
        </Page.Header.Buttons>
        <Page.Header.Title>Карточка товара</Page.Header.Title>
      </Page.Header>
      <Page.Body>{loading ? <Loader /> : <Form />}</Page.Body>
    </Page>
  );
};
