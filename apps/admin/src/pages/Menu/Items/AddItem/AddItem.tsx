import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Flex, Grid, UIButton } from "@book-eat/ui";

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
  menuEndpoints,
  menuSelectors,
} from "$api";
import { useSelector } from "react-redux";
import { IMenu } from "$models";
import { EntityId } from "@reduxjs/toolkit";

interface IProps {
  id?: EntityId;
  onSubmit: () => void;
  onCancel: () => void;
}

const AddItem: FC<IProps> = (props) => {
  const { id, onCancel, onSubmit } = props;

  const item = useSelector((state) => menuSelectors.selectById(state, id));
  categoriesEndpoints.useFetchCategoriesQuery();
  additionsEndpoints.useFetchAdditionsQuery();

  const defaultValues: IFormValues = {
    title: item?.title,
    price: item?.price,
    discount: item?.discount,
    weight: item?.quantity,
    stock: item?.inStock?.map((stock) => String(stock)) ?? [],
    categories: item?.group_id ?? [],
    additionals: item?.additionIds ?? [],
    description: item?.description,
    image: item?.mainImageUrl,
    ingredients: item?.ingredients,
  };

  const methods = useForm<IFormValues>({
    defaultValues,
  });

  const [saveMenu] = menuEndpoints.useSaveMenuMutation();

  const handleSubmit = async (data: IFormValues) => {
    const payload: IMenu = {
      title: data.title,
      slug: data.title,
      sku: data.price,
      price: Number(data.price),
      description: data.description,
      ingredients: data.ingredients,
      enabled: true,
      measure: "гр",
      inStock: data.stock.map((item) => Number(item)),
      discount: Number(data.discount),
      additions: data.additionals,
      group_id: data.categories,
      isRecommend: false,
      mainImageUrl: data.image,
      imagesUrls: [data.image],
      quantity: Number(data.weight),
      id: id,
    };

    await saveMenu(payload);
    onSubmit();
  };

  return (
    <FormProvider {...methods}>
      <div className={classes.wrapper}>
        <Grid gap={5}>
          <Grid gridTemplateColumns="min-content auto" gap={3}>
            <Image />
            <Grid gap={5}>
              <Title />
              <Categories />
            </Grid>
          </Grid>
          <Grid gridTemplateColumns="2fr 2fr 4fr" gap={4}>
            <Weight />
            <Price />
            <Discont />
          </Grid>
        </Grid>
        <div className={classes.outlineSelects}>
          <Ingredients />
          <Description />
        </div>
        <div className={classes.multipleSelects}>
          <Additionals />
          <Stock />
        </div>
        <div className={classes.footer}>
          <UIButton variant="secondary" onClick={onCancel}>
            Отменить
          </UIButton>
          <UIButton onClick={methods.handleSubmit(handleSubmit)}>
            Сохранить изменения
          </UIButton>
        </div>
      </div>
    </FormProvider>
  );
};

export default AddItem;
