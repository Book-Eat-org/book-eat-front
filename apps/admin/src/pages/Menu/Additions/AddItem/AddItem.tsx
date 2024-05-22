import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BackIcon24, Button, Flex, theme, UIGrid } from "@book-eat/ui";

import { Category, Price, Title, Weight } from "./Fields";
import { IFormValues } from "./models";
import {
  additionsEndpoints,
  additionsSelectors,
  categoriesEndpoints,
} from "$api";
import { Page } from "$components";
import { useNavigate, useParams } from "react-router-dom";
import { inputAdapter, outputAdapter } from "./adapters.ts";
import { isNil } from "ramda";
import { useSelector } from "react-redux";

const AddItem: FC = () => {
  const { id } = useParams();

  const item = useSelector((state) => additionsSelectors.selectById(state, id));

  const navigate = useNavigate();

  const methods = useForm<IFormValues>({
    defaultValues: isNil(item) ? undefined : inputAdapter(item),
  });

  const navigateBack = () => navigate("..");

  categoriesEndpoints.useFetchCategoriesQuery();
  const [saveAddition] = additionsEndpoints.useSaveAdditionMutation();

  const handleSubmit = async (data: IFormValues) => {
    const payload = outputAdapter(data);

    await saveAddition(payload);
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
        <Page.Header.Title>Добавки</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <FormProvider {...methods}>
          <UIGrid gap="30px">
            <UIGrid gap="20px">
              <Title />
              <UIGrid gap="8px" colSizes="1fr 1fr 2fr">
                <Weight />
                <Price />
                <Category />
              </UIGrid>
            </UIGrid>
            <UIGrid colSizes="1fr 2fr" gap="64px">
              <Button onClick={navigateBack}>Отменить</Button>
              <Button onClick={methods.handleSubmit(handleSubmit)}>
                Создать
              </Button>
            </UIGrid>
          </UIGrid>
        </FormProvider>
      </Page.Body>
    </Page>
  );
};

export default AddItem;
