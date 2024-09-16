import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "$hooks";
import {
  Grid,
  Typography,
  theme,
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
import { dec, inc, isEmpty, isNotNil } from "ramda";
import { navigateToPage, PageURLS } from "$constants";
import { SYMBOLS, getPriceWithDiscount } from "@book-eat/utils";
import { Image } from "./Image";
import { Title } from "./Title";
import { useProduct } from "./hooks.ts";
import { Description } from "./Description";
import { CardContext } from "./context.ts";
import { Additions } from "./Additions";
import { additionsEndpoints } from "@book-eat/api";
import { additionsSelectors } from "../../../../store/entities";

export const Body: FC = () => {
  const [col, setCol] = useState<number>(1);
  const [additionsIds, setAdditionsIds] = useState<EntityId[]>([]);
  const { id } = useParams();
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
      addToCartNew({ col, shopId, additionIds: additionsIds, productId: id! }),
    );
    navigate(navigateToPage(PageURLS.PRODUCTS, { id: shopId }));
  };

  const incrementCol = () => setCol(inc);
  const decrementCol = () => setCol(dec);

  const additionsSum =
    additionsIds.reduce(
      (acc: number, curr) =>
        acc + additionsStore.find((item) => item.id === curr)!.price ?? 0,
      0,
    ) * col;

  const totalPrice = col * getPriceWithDiscount(price, discount) + additionsSum;

  return (
    <CardContext.Provider value={{ additionsIds, setAdditionsIds }}>
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
    </CardContext.Provider>
  );
};
