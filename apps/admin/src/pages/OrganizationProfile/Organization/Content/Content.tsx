import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BackIcon24, Button, Flex, Grid, theme, UIGrid } from "@book-eat/ui";

import { IFormValues } from "./models";
import { useNavigate } from "react-router-dom";
import { inputAdapter, outputAdapter } from "./adapters";
import { currentOrganizationSelector, organizationsEndpoints } from "$api";
import { useSelector } from "react-redux";
import LegalInfo from "./LegalInfo";
import { Page } from "$components";
import Header from "./Header";

const Content: FC = () => {
  const [data] = useSelector(currentOrganizationSelector.selectAll);
  const [saveOrganization] = organizationsEndpoints.useUpdateOrgMutation();

  const navigate = useNavigate();

  const defaultValues: IFormValues = inputAdapter(data);

  const methods = useForm<IFormValues>({
    defaultValues,
  });

  const navigateBack = () => navigate("..");

  const handleSubmit = async (formData: IFormValues) => {
    await saveOrganization(outputAdapter(formData, data.id));

    navigateBack();
  };

  const onBackClick = () => {
    navigate("..");
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
            <BackIcon24 onClick={onBackClick} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Инфо</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <FormProvider {...methods}>
          <Grid gap={7}>
            <Header />
            <LegalInfo />
            <UIGrid colSizes="1fr 2fr" gap="68px">
              <Button onClick={navigateBack}>Отменить</Button>
              <Button onClick={methods.handleSubmit(handleSubmit)}>
                Сохранить изменения
              </Button>
            </UIGrid>
          </Grid>
        </FormProvider>
      </Page.Body>
    </Page>
  );
};

export default Content;
