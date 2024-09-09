import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createMenuSelectorsById } from "@book-eat/api";
import { useSelector } from "$hooks";
import {
  Grid,
  Typography,
  theme,
  UICheckbox,
  Flex,
  Button,
  IconButton,
  MinusIcon24,
  PlusIcon24,
} from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addToCartNew } from "../../../../store/cart";
import { activeShopSelector } from "../../../../store/shop";
import { dec, inc } from "ramda";
import { navigateToPage, PageURLS } from "../../../../constants/urls.ts";
import { SYMBOLS, getPriceWithDiscount } from "@book-eat/utils";
import { Image } from "./Image";
import { Title } from "./Title";
import { useProduct } from "./hooks.ts";
import { Description } from "./Description";

export const Body: FC = () => {
  const [col, setCol] = useState<number>(1);
  const [additionIds, setAdditionIds] = useState<EntityId[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const shopId = useSelector(activeShopSelector)!;

  const item = useProduct();

  const { weight, ingredients, additions = [], price, discount } = item;

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(addToCartNew({ col, shopId, additionIds, productId: id! }));
    navigate(navigateToPage(PageURLS.PRODUCTS, { id: shopId }));
  };

  const incrementCol = () => setCol(inc);
  const decrementCol = () => setCol(dec);
  const additionsSum =
    additionIds.reduce(
      (acc: number, curr) =>
        acc + additions.find((item) => item.id === curr)!.price ?? 0,
      0,
    ) * col;

  const totalPrice = col * getPriceWithDiscount(price, discount) + additionsSum;

  return (
    <Grid gap={2}>
      <Image />
      <Title />
      <Description />
      <Grid
        gap={5}
        background={theme.colors.general50}
        padding={10}
        borderRadius={10}
      >
        <Typography size="14/14" fontWeight={600}>
          Добавки
        </Typography>
        <Grid gap={3}>
          {additions?.map(({ id, title, price }) => (
            <Flex justifyContent="space-between" alignItems="center" key={id}>
              <Flex gap={2} alignItems="center">
                <UICheckbox
                  onChange={(value) =>
                    value
                      ? setAdditionIds([...additionIds, id])
                      : setAdditionIds(
                          additionIds.filter((item) => item !== id),
                        )
                  }
                  selected={additionIds.includes(id)}
                />
                <Typography>
                  {title}, {weight} г
                </Typography>
              </Flex>
              <Typography>
                {price} {SYMBOLS.RUB}
              </Typography>
            </Flex>
          ))}
        </Grid>

        <Flex gap={8}>
          <Flex gap={4} justifyContent="space-between" alignItems="center">
            <IconButton onClick={decrementCol} disabled={col === 1}>
              <MinusIcon24 />
            </IconButton>
            <Typography size="14/14">{col}</Typography>
            <IconButton onClick={incrementCol}>
              <PlusIcon24 />
            </IconButton>
          </Flex>
          <Button onClick={submit} width="100%">
            Добавить {totalPrice} {SYMBOLS.RUB}
          </Button>
        </Flex>
      </Grid>
    </Grid>
  );
};
