import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Grid, UIButton, UIGrid } from "@book-eat/ui";

import classes from "./AddItem.module.css";
import { IFormValues } from "./models";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../Header";
import { inputAdapter, outputAdapter } from "./adapters";
import { currentOrganizationSelector, organizationsEndpoints } from "$api";
import { useSelector } from "react-redux";
import { PAGE_URLS } from "$constants";
import Header from "./Header";
import LegalInfo from "./LegalInfo";

interface IProps {
  onSubmit: () => void;
  onCancel: () => void;
}

const Content: FC<IProps> = (props) => {
  const { onCancel, onSubmit } = props;

  const [data] = useSelector(currentOrganizationSelector.selectAll);
  const [saveOrganization] = organizationsEndpoints.useUpdateOrgMutation();

  const navigate = useNavigate();

  const defaultValues: IFormValues = inputAdapter(data);

  const methods = useForm<IFormValues>({
    defaultValues,
  });

  const handleSubmit = async (formData: IFormValues) => {
    await saveOrganization(outputAdapter(formData, data.id));

    onSubmit();
  };

  const onBackClick = () => {
    navigate(PAGE_URLS.MY_SHOPS);
  };

  return (
    <FormProvider {...methods}>
      <div className={classes.wrapper}>
        <PageHeader title="Загрузка информации" onBackClick={onBackClick} />
        <Grid gap={7}>
          <Header />
          <LegalInfo />
          <UIGrid colSizes="1fr 2fr" gap="68px">
            <UIButton variant="secondary" onClick={onCancel}>
              Отменить
            </UIButton>
            <UIButton onClick={methods.handleSubmit(handleSubmit)}>
              Сохранить изменения
            </UIButton>
          </UIGrid>
        </Grid>
      </div>
    </FormProvider>
  );
};

export default Content;
