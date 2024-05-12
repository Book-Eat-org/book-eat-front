import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { UIButton, UIGrid } from "@book-eat/ui";

import { Group, Price, Title, Weight } from "./Fields";
import { IFormValues } from "./models";
import { additionsEndpoints, categoriesEndpoints } from "$api";
import { IAddition } from "@book-eat/api";

interface IProps {
  onCancel: () => void;
}

const AddItem: FC<IProps> = (props) => {
  const { onCancel } = props;
  const methods = useForm<IFormValues>();

  categoriesEndpoints.useFetchCategoriesQuery();
  const [saveAddition] = additionsEndpoints.useSaveAdditionMutation();

  const handleSubmit = async (data: IFormValues) => {
    const payload: IAddition = {
      title: data.title,
      price: data.price,
      isActive: true,
    };

    await saveAddition(payload);
    onCancel();
  };

  return (
    <FormProvider {...methods}>
      <UIGrid gap="30px">
        <UIGrid gap="20px">
          <Title />
          <UIGrid gap="8px" colSizes="1fr 1fr 2fr">
            <Weight />
            <Price />
            <Group />
          </UIGrid>
        </UIGrid>
        <UIGrid colSizes="1fr 2fr" gap="64px">
          <UIButton variant="secondary" onClick={onCancel}>
            Отменить
          </UIButton>
          <UIButton onClick={methods.handleSubmit(handleSubmit)}>
            Добавить категорию
          </UIButton>
        </UIGrid>
      </UIGrid>
    </FormProvider>
  );
};

export default AddItem;
