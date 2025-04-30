import { FC } from "react";
import { useSelector } from "react-redux";
import { useController, FormProvider, useForm } from "react-hook-form";
import { BackIcon24, Button, Flex, theme, UIGrid, UIInput } from "@book-eat/ui";
import { categoriesSelectors } from "$store";
import { Page } from "$components";
import { useNavigate } from "react-router-dom";
import { IFormState } from "./models";
import { categoriesEndpoints } from "@book-eat/api";

const AddItem: FC = () => {
  const navigate = useNavigate();
  const [trigger] = categoriesEndpoints.useCreateCategoryMutation();

  const data = useSelector(categoriesSelectors.selectAll);
  const titles = data?.flat().map((item) => item.title?.toLowerCase()) ?? [];

  const defaultValues: IFormState = {
    category: "",
  };

  const methods = useForm<IFormState>({
    defaultValues,
  });

  const { field, fieldState } = useController<IFormState, "category">({
    name: "category",
    control: methods.control,
    rules: {
      required: {
        value: true,
        message: "Поле не может быть пустым. Пожалуйста, придумайте название.",
      },
      validate: {
        uniqueTitle: (value) => {
          if (value) {
            const categoryValue = value.toLowerCase().trim();
            if (titles.includes(categoryValue)) {
              return "Такая категория уже существует. Пожалуйста, придумайте новое название.";
            }
            return true;
          }
        },
      },
    },
  });

  const { onChange, value } = field;
  const { error } = fieldState;

  const navigateBack = () => navigate("..");

  const onSubmit = async (data: IFormState) => {
    const { category } = data;

    if (category?.trim()) {
      await trigger({ title: category, isActive: true });
      navigateBack();
    }
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
        <Page.Header.Title>Категории</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <UIGrid gap="30px" padding="0 0 20px">
              <UIInput
                placeholder="Название категории"
                value={value}
                onChange={onChange}
                error={error?.message}
              />
              <UIGrid colSizes="1fr 2fr" gap="64px">
                <Button onClick={navigateBack}>Отменить</Button>
                <Button type="submit">Добавить категорию</Button>
              </UIGrid>
            </UIGrid>
          </form>
        </FormProvider>
      </Page.Body>
    </Page>
  );
};

export default AddItem;
