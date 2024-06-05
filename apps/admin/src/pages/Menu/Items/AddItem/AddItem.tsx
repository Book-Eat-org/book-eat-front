import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BackIcon24, Button, Flex, Grid, theme } from "@book-eat/ui";

import classes from "./AddItem.module.css";
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
  menuSelectors,
  placesEndpoints,
} from "$api";
import { useSelector } from "react-redux";
import { Page } from "$components";
import { useNavigate, useParams } from "react-router-dom";
import { isNil } from "ramda";
import { inputAdapter, outputAdapter } from "./adapters.ts";

const AddItem: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectors = menuByIdSelectorsFactory(id);

  const item = useSelector((state) => selectors?.selectById(state, id));
  categoriesEndpoints.useFetchCategoriesQuery();
  additionsEndpoints.useFetchAdditionsQuery();
  placesEndpoints.useFetchPlacesByOrganizationQuery();
  const [triggerGetDetailMenu] = menuEndpoints.useLazyGetMenuByIdQuery();
  const [triggerLinkWithCategory] = menuEndpoints.useLinkWithCategoryMutation();
  const [triggerLinkWithPlace] = menuEndpoints.useLinkWithPlaceMutation();
  const [triggerLinkWithAddition] = menuEndpoints.useLinkWithAdditionMutation();

  useEffect(() => {
    if (id) {
      triggerGetDetailMenu(id);
    }
  }, [id]);

  const methods = useForm<IFormValues>({
    defaultValues: isNil(item) ? undefined : inputAdapter(item),
  });

  const [saveMenu] = menuEndpoints.useSaveMenuMutation();
  const [editMenu] = menuEndpoints.useEditMenuMutation();

  const navigateBack = () => navigate("..");

  const handleSubmit = async (data: IFormValues) => {
    const payload = outputAdapter(data);

    const result = isNil(id)
      ? await saveMenu(payload)
      : await editMenu({ ...payload, id });

    const resultId = result.data.id;

    await triggerLinkWithPlace({
      placesIds: data.stock,
      productId: resultId,
    });

    await triggerLinkWithCategory({
      categoriesIds: data.categories,
      productId: resultId,
    });

    await triggerLinkWithAddition({
      additionsIds: data.additionals,
      productId: resultId,
    });

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
        <Page.Header.Title>Меню</Page.Header.Title>
      </Page.Header>
      <Page.Body>
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
              <Button onClick={navigateBack}>Отменить</Button>
              <Button onClick={methods.handleSubmit(handleSubmit)}>
                Сохранить
              </Button>
            </div>
          </div>
        </FormProvider>
      </Page.Body>
    </Page>
  );
};

export default AddItem;
