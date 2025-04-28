import { FC, useEffect, useState } from "react";
import { useSelector } from "$hooks";
import { Flex, Grid, UIPopupMenu } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { dec, inc, isEmpty, isNotNil, keys, omit } from "ramda";
import { Image } from "./Image";
import { Title } from "./Title";
import { useProduct } from "./hooks.ts";
import { Description } from "./Description";
import { CardContext } from "./context.ts";
import { Additions } from "./Additions";
import { additionsEndpoints } from "@book-eat/api";
import { activeShopSelector } from "../../../../../store/shop";
import { addToCartNew } from "../../../../../store/cart";
import { useProductListContext } from "../context.ts";
import { theme } from "@book-eat/ui";
import { Footer } from "./Footer";

export const DetailProduct: FC = () => {
  const [col, setCol] = useState<number>(1);
  const { openedProductId: id, setOpenedProductId } = useProductListContext();
  const [additions, setAdditions] = useState<
    Record<EntityId, { count: number }>
  >({});

  const [fetchAdditions] = additionsEndpoints.useFetchAdditionsByIdsMutation();

  const shopId = useSelector(activeShopSelector)!;

  const item = useProduct();

  const productAdditions = item.additionsIds;

  useEffect(() => {
    if (isNotNil(productAdditions) && !isEmpty(productAdditions)) {
      fetchAdditions(productAdditions);
    }
  }, [productAdditions]);

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
    setOpenedProductId();
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

  const onClose = () => setOpenedProductId(undefined);

  return (
    <CardContext.Provider value={{ additions, setAddition }}>
      <UIPopupMenu
        onClose={onClose}
        background={theme.colors.general200}
        sticky
      >
        <Grid gap={2}>
          <Image />
          <Flex 
            flexDirection="column"
            padding="0 15px"
            gap={2}
            paddingBottom="80px"
          >
            <Title />
            <Description />
            <Additions />
            <Footer
              submit={submit}
              decrementCol={decrementCol}
              incrementCol={incrementCol}
              col={col}
            />
          </Flex>
        </Grid>
      </UIPopupMenu>
    </CardContext.Provider>
  );
};
