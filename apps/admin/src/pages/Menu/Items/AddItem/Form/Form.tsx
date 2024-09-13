import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Button, Grid } from "@book-eat/ui";

import classes from "./Form.module.css";
import {
  Additionals,
  Categories,
  Ingredients,
  Description,
  Discont,
  Image,
  Price,
  Stock,
  Title,
  Weight,
} from "./Fields";
import { IFormValues } from "./models";
import {
  additionsEndpoints,
  categoriesEndpoints,
  menuByIdSelectorsFactory,
  menuEndpoints,
  placesEndpoints,
} from "$api";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { isNil } from "ramda";
import { inputAdapter, outputAdapter } from "./adapters.ts";
import { getCurrentOrganizationSelector } from "$store";

export const Form: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectors = menuByIdSelectorsFactory(id);

  const item = useSelector((state) => selectors?.selectById(state, id));
  const organization = useSelector(getCurrentOrganizationSelector);

  categoriesEndpoints.useFetchCategoriesQuery();
  additionsEndpoints.useFetchAdditionsQuery();
  placesEndpoints.useFetchPlacesByOrganizationQuery(organization.id);

  const methods = useForm<IFormValues>({
    defaultValues: isNil(item) ? undefined : inputAdapter(item),
  });

  const [saveMenu] = menuEndpoints.useSaveMenuMutation();
  const [editMenu] = menuEndpoints.useEditMenuMutation();

  const navigateBack = () => navigate("..");

  const handleSubmit = async (data: IFormValues) => {
    const payload = outputAdapter(data);

    isNil(id) ? await saveMenu(payload) : await editMenu({ ...payload, id });

    navigateBack();
  };

  return (
    <FormProvider {...methods}>
      <div>
        <Grid gap={3}>
          <Image />
          <Title />
          <Categories />
          <Weight />
          <Price />
          <Discont />
          <Ingredients />
          <Description />
          <Additionals />
          <Stock />
        </Grid>
        <div className={classes.footer}>
          <Button variant="danger" onClick={navigateBack}>
            Отменить
          </Button>
          <Button onClick={methods.handleSubmit(handleSubmit)}>
            Сохранить
          </Button>
        </div>
      </div>
    </FormProvider>
  );
};
