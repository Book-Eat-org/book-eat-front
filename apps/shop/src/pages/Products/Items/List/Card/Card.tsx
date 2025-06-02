import { EntityId } from "@reduxjs/toolkit";
import { forwardRef } from "react";
import { isNil, values } from "ramda";
import { Box, Flex, Grid, Skeleton, useLazyLoad } from "@book-eat/ui";
import classes from "./Card.module.css";
import Price from "./Price";
import Weight from "./Weight";
import Title from "./Title";
import Image from "./Image";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { createMenuSelectorsByPlaceId } from "@book-eat/api";
import { useParams } from "react-router-dom";
import { cartSelector } from "../../../../../store/cart";

interface IProps {
  id: EntityId;
}

const Card = forwardRef<HTMLDivElement, IProps>((props, externalRef) => {
  const { id } = props;
  const { id: placeId } = useParams();
  const selectors = createMenuSelectorsByPlaceId(placeId!);
  const cart = useSelector(cartSelector);
  const { isVisible, setRefs } = useLazyLoad<HTMLDivElement>(externalRef);

  const isSelected =
    placeId === cart.shopId &&
    values(cart.items).some((item) => item.productId === id);

  const item = useSelector((state) => selectors.selectById(state, id));

  if (isNil(item)) {
    return null;
  }

  if (!isVisible) {
    return (
      <Box ref={setRefs}>
        <Skeleton gap={3} height={330} />
      </Box>
    );
  };

  return (
    <Box
      bg="white"
      borderRadius="20px"
      width="100%"
      ref={setRefs}
      className={classes.wrapper}
    >
      <Flex borderRadius="20px" flexDirection="column" height="100%">
        <Image id={id} />
        <Flex
          flexDirection="column"
          gap={8}
          p={10}
          justifyContent="space-between"
          height="100%"
        >
          <Grid gap={1}>
            <Weight id={id} />
            <Title id={id} />
          </Grid>
          <Grid gap={3}>
            {isSelected && <Price id={id} />}
            <Cart id={id} />
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
});

export default Card;
