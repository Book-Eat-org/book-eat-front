import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { createMenuSelectorsById } from "@book-eat/api";
import { useSelector } from "$hooks";
import {
  Grid,
  Typography,
  theme,
  UICheckbox,
  Flex,
  Button,
} from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../store/cart";
import { activeShopSelector } from "../../../../store/shop";

export const Body: FC = () => {
  const [additionsIds, setAdditionsIds] = useState<EntityId[]>([]);
  const { id } = useParams();

  const selectors = createMenuSelectorsById(id!);
  const shopId = useSelector(activeShopSelector);

  const item = useSelector((state) => selectors.selectById(state, id));

  const {
    mainImageUrl,
    title,
    weight,
    description,
    ingredients,
    additions,
    price,
  } = item;

  const dispatch = useDispatch();

  const submit = () =>
    dispatch(addToCart({ id, shopId, additions: additionsIds }));

  return (
    <Grid gap={2}>
      <img
        src={
          mainImageUrl ??
          "https://archive.org/download/placeholder-image/placeholder-image.jpg"
        }
        alt=""
        style={{ height: 194, width: "100%" }}
      />
      <Grid
        gap={1}
        background={theme.colors.general30}
        padding={10}
        borderRadius={10}
      >
        <Typography size="12/12">{weight} г</Typography>
        <Typography size="12/12">{price} р</Typography>
        <Typography size="18/18">{title}</Typography>
      </Grid>
      <Grid
        gap={1}
        background={theme.colors.general30}
        padding={10}
        borderRadius={10}
      >
        <Typography size="12/12">Описание</Typography>
        <Typography>{description}</Typography>
      </Grid>
      <Grid
        gap={1}
        background={theme.colors.general30}
        padding={10}
        borderRadius={10}
      >
        <Typography size="12/12">Состав</Typography>
        <Typography>{ingredients}</Typography>
      </Grid>
      <Grid
        gap={5}
        background={theme.colors.general30}
        padding={10}
        borderRadius={10}
      >
        <Typography size="12/12">Добавки</Typography>
        <Grid gap={3}>
          {additions.map(({ id, title, price }) => (
            <Flex justifyContent="space-between" alignItems="center" key={id}>
              <Flex gap={2} alignItems="center">
                <UICheckbox
                  onChange={(value) =>
                    value
                      ? setAdditionsIds([...additionsIds, id])
                      : setAdditionsIds(
                          additionsIds.filter((item) => item !== id),
                        )
                  }
                  selected={additionsIds.includes(id)}
                />
                <Typography>{title}</Typography>
              </Flex>
              <Typography>{price} р</Typography>
            </Flex>
          ))}
        </Grid>

        <Button onClick={submit}>Добавить</Button>
      </Grid>
    </Grid>
  );
};
