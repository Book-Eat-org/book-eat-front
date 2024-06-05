import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { isNil } from "ramda";
import { Box, Grid } from "@book-eat/ui";
import classes from "./Card.module.css";
import Price from "./Price";
import Weight from "./Weight";
import Title from "./Title";
import Image from "./Image";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { createMenuSelectorsByPlaceId } from "@book-eat/api";
import { useParams } from "react-router-dom";

interface IProps {
  id: EntityId;
}

const Card: FC<IProps> = (props) => {
  const { id } = props;
  const { id: placeId } = useParams();
  const selectors = createMenuSelectorsByPlaceId(placeId!);

  const item = useSelector((state) => selectors.selectById(state, id));

  if (isNil(item)) {
    return null;
  }

  return (
    <Box
      bg="white"
      borderRadius="20px"
      width="100%"
      className={classes.wrapper}
    >
      <Box borderRadius="20px">
        <Image id={id} />
        <Grid gap={5} p={10}>
          <Grid gap={1}>
            <Weight id={id} />
            <Title id={id} />
          </Grid>
          <Grid gap={1}>
            <Price id={id} />
          </Grid>
          <Cart id={id} />
        </Grid>
      </Box>
    </Box>
  );
};

export default Card;
