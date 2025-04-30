import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BackIcon24, Button, Flex, theme, UIGrid } from "@book-eat/ui";

import { Discount, Title } from "./Fields";
import { IFormValues } from "./models";
import { Page } from "$components";
import { useNavigate, useParams } from "react-router-dom";
import { inputAdapter, outputAdapter } from "./adapters.ts";
import { isNil, isNotNil } from "ramda";
import { useSelector } from "react-redux";
import { promoCodesSelectors } from "$store";
import { promoCodesEndpoints, categoriesEndpoints } from "@book-eat/api";

const AddItem: FC = () => {
  const { id } = useParams();

  const item = useSelector((state) =>
    promoCodesSelectors.selectById(state, id),
  );

  const navigate = useNavigate();

  const methods = useForm<IFormValues>({
    defaultValues: isNil(item) ? undefined : inputAdapter(item),
  });

  const navigateBack = () => navigate("..");

  categoriesEndpoints.useFetchCategoriesQuery();
  const [savePromo] = promoCodesEndpoints.useCreatePromoCodeMutation();
  const [editPromo] = promoCodesEndpoints.useUpdatePromoCodeMutation();

  const isExist = isNotNil(id);

  const handleSubmit = async (data: IFormValues) => {
    const payload = outputAdapter(data);

    isExist ? await editPromo({ ...payload, id }) : await savePromo(payload);
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
        <Page.Header.Title>Промокод</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <FormProvider {...methods}>
          <UIGrid gap="30px">
            <UIGrid gap="20px">
              <Title />
              <Discount />
            </UIGrid>
            <Button onClick={methods.handleSubmit(handleSubmit)}>
              {isExist ? "Сохранить" : "Создать"}
            </Button>
          </UIGrid>
        </FormProvider>
      </Page.Body>
    </Page>
  );
};

export default AddItem;
