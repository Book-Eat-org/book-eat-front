import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BackIcon24, Button, Flex, theme, UIGrid } from "@book-eat/ui";

import { Measure, Price, Title, Weight } from "./Fields";
import { IFormValues } from "./models";
import {
  additionsEndpoints,
  additionsSelectors,
  categoriesEndpoints,
} from "$api";
import { Page } from "$components";
import { useNavigate, useParams } from "react-router-dom";
import { inputAdapter, outputAdapter } from "./adapters.ts";
import { isNil, isNotNil } from "ramda";
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
  const [editAddition] = additionsEndpoints.useEditAdditionMutation();

  const isExist = isNotNil(id);

  const handleSubmit = async (data: IFormValues) => {
    const payload = outputAdapter(data);

    isExist
      ? await editAddition({ ...payload, id })
      : await saveAddition(payload);
    navigateBack();
  };

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
        </Page.Header.Buttons>
        <Page.Header.Title>Добавки</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <FormProvider {...methods}>
          <UIGrid gap="30px">
            <UIGrid gap="20px">
              <Title />
              <UIGrid gap="8px" colSizes="1fr 1fr 1fr">
                <Weight />
                <Measure />
                <Price />
              </UIGrid>
            </UIGrid>
            <UIGrid colSizes="1fr 2fr" gap="64px">
              <Button onClick={navigateBack}>Отменить</Button>
              <Button onClick={methods.handleSubmit(handleSubmit)}>
                {isExist ? "Сохранить" : "Создать"}
              </Button>
            </UIGrid>
          </UIGrid>
        </FormProvider>
      </Page.Body>
    </Page>
  );
};

export default AddItem;
