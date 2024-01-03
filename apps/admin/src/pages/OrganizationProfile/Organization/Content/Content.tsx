import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Grid, UIButton, UIGrid, UITypography } from "@book-eat/ui";

import classes from "./AddItem.module.css";
import { IFormValues } from "./models";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../Header";
import { inputAdapter, outputAdapter } from "./adapters";
import { organizationsEndpoints, organizationsSelectors } from "$api";
import { useSelector } from "react-redux";
import { PAGE_URLS } from "$constants";
import Header from "./Header";
import LegalInfo from "./LegalInfo";
import { ActualContacts } from "./ActualContacts";
import { Files } from "./Files";
import { LegalContacts } from "./LegalContacts";

interface IProps {
  onSubmit: () => void;
  onCancel: () => void;
}

const Content: FC<IProps> = (props) => {
  const { onCancel, onSubmit } = props;

  const [data] = useSelector(organizationsSelectors.selectAll);
  const [saveOrganization] = organizationsEndpoints.useUpdateOrgMutation();

  const navigate = useNavigate();

  const defaultValues: IFormValues = inputAdapter(data);

  const methods = useForm<IFormValues>({
    defaultValues,
  });

  const handleSubmit = async (formData: IFormValues) => {
    await saveOrganization({
      files: formData?.files?.map(({ value }) => value) ?? [],
      infoLegal: outputAdapter(formData, data.id),
    });

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
          <ActualContacts />
          <LegalContacts />
          <UIGrid gap="24px">
            <UITypography variant="textXl" weight="semibold" color="gray">
              Юридическая информация
            </UITypography>
            <Files />
          </UIGrid>
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
