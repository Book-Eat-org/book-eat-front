import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "$hooks";
import {
  Grid,
  Typography,
  Flex,
  Button,
  IconButton,
  MinusIcon24,
  PlusIcon24,
  UIPopupMenu,
} from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { dec, inc, isEmpty, isNotNil, keys, omit } from "ramda";
import { navigateToPage, PageURLS } from "$constants";
import { SYMBOLS, getPriceWithDiscount } from "@book-eat/utils";
import { Image } from "./Image";
import { Title } from "./Title";
import { useProduct } from "./hooks.ts";
import { Description } from "./Description";
import { CardContext } from "./context.ts";
import { Additions } from "./Additions";
import { additionsEndpoints } from "@book-eat/api";
import { activeShopSelector } from "../../../../../store/shop";
import { additionsSelectors } from "../../../../../store/entities";
import { addToCartNew } from "../../../../../store/cart";
import { useProductListContext } from "../context.ts";
import { theme } from "@book-eat/ui";

export const DetailProduct: FC = () => {
  const [col, setCol] = useState<number>(1);
  const { openedProductId: id, setOpenedProductId } = useProductListContext();
  const [additions, setAdditions] = useState<
    Record<EntityId, { count: number }>
  >({});
  const navigate = useNavigate();

  const [fetchAdditions] = additionsEndpoints.useFetchAdditionsByIdsMutation();

  const shopId = useSelector(activeShopSelector)!;

  const item = useProduct();

  const productAdditions = item.additionsIds;

  const additionsStore = useSelector(additionsSelectors.selectAll);

  useEffect(() => {
    if (isNotNil(productAdditions) && !isEmpty(productAdditions)) {
      fetchAdditions(productAdditions);
    }
  }, [productAdditions]);

  const { price, discount } = item;

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(
      addToCartNew({
        col,
        shopId,
        additions: keys(additions).map((id) => ({
          id,
          col: additions[id].count,
        })),
        productId: id!,
      }),
    );
    navigate(navigateToPage(PageURLS.PRODUCTS, { id: shopId }));
  };

  const setAddition = (props: { id: EntityId; count: number }) => {
    const { id, count } = props;
    if (count === 0) {
      setAdditions(omit([String(id)]));
      return;
    }
    setAdditions({ ...additions, [id]: { count } });
  };

  const incrementCol = () => setCol(inc);
  const decrementCol = () => setCol(dec);

  const additionsSum =
    keys(additions).reduce(
      (acc: number, curr) =>
        acc + additionsStore.find((item) => item.id === curr)!.price ?? 0,
      0,
    ) * col;

  const totalPrice = col * getPriceWithDiscount(price, discount) + additionsSum;

  const onClose = () => setOpenedProductId(undefined);

  return (
    <CardContext.Provider value={{ additions, setAddition }}>
      <UIPopupMenu onClose={onClose} background={theme.colors.general200}>
        <Grid gap={2}>
          <Image />
          <Title />
          <Description />
          <Additions />
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
      </UIPopupMenu>
    </CardContext.Provider>
  );
};
