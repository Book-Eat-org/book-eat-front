import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Name, Phone, Place } from "./Fields";
import { IFormValues } from "./models";
import { cashiersEndpoints, cashiersSelectors } from "$api";
import { Button, UIGrid } from "@book-eat/ui";
import { Page } from "$components";
import { inputAdapter, outputAdapter } from "./adapters.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { isNil } from "ramda";

const Add: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = useSelector((state) => cashiersSelectors.selectById(state, id));
  const navigateBack = () => navigate("..");

  const methods = useForm<IFormValues>({
    defaultValues: isNil(item) ? undefined : inputAdapter(item),
  });

  const [trigger] = cashiersEndpoints.useCreateCashierMutation();

  const handleSubmit = async (data: IFormValues) => {
    const payload = outputAdapter(data);
    await trigger(payload);
    navigateBack();
  };

  return (
    <Page>
      <Page.Header>
        <Page.Header.Title>Кассиры</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <FormProvider {...methods}>
          <UIGrid gap="30px">
            <UIGrid gap="30px">
              <Name />
              <Place />
              <Phone />
            </UIGrid>
            <UIGrid
              justifyContent="space-between"
              colSizes="1fr 1fr"
              gap="31px"
            >
              <Button onClick={navigateBack}>Отменить</Button>
              <Button onClick={methods.handleSubmit(handleSubmit)}>
                Добавить
              </Button>
            </UIGrid>
          </UIGrid>
        </FormProvider>
      </Page.Body>
    </Page>
  );
};

export default Add;
