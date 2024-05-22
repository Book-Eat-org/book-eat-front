import { FC, useState } from "react";

import {
  BackIcon24,
  Button,
  Flex,
  theme,
  UIButton,
  UIGrid,
  UIInput,
} from "@book-eat/ui";
import { categoriesEndpoints } from "$api";
import { Page } from "$components";
import { useNavigate, useParams } from "react-router-dom";

const AddItem: FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [trigger] = categoriesEndpoints.useCreateCategoryMutation();

  const navigateBack = () => navigate("..");

  const onSubmit = async () => {
    await trigger({ title, isActive: true });
    navigateBack();
  };

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
        <Page.Header.Title>Категории</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <UIGrid gap="30px" padding="0 0 20px">
          <UIInput
            placeholder="Название категории"
            value={title}
            onChange={setTitle}
          />
          <UIGrid colSizes="1fr 2fr" gap="64px">
            <Button onClick={navigateBack}>Отменить</Button>
            <Button onClick={onSubmit}>Добавить категорию</Button>
          </UIGrid>
        </UIGrid>
      </Page.Body>
    </Page>
  );
};

export default AddItem;
