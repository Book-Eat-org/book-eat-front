import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { isNil } from "ramda";
import { Box, Grid } from "@book-eat/ui";
import classes from "./Card.module.css";
import { PRODUCTS } from "../../stubs.ts";
import Price from "./Price";
import Weight from "./Weight";
import Title from "./Title";
import Image from "./Image";
import Cart from "./Cart";

interface IProps {
  id: EntityId;
}

const Card: FC<IProps> = (props) => {
  const { id } = props;
  // const item = useSelector((state) =>
  //   organizationsSelectors.selectById(state, id),
  // );

  const item = PRODUCTS.entities.find((item) => item.id === id);

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
      <Box p="2px" borderRadius="20px">
        <Image id={id} />
        <Grid gap={5}>
          <Grid padding="5px 10px" gap={1}>
            <Weight id={id} />
            <Title id={id} />
          </Grid>
          <Grid padding="5px 10px" gap={1}>
            <Price id={id} />
          </Grid>
          <Cart id={id} />
        </Grid>
      </Box>
    </Box>
  );
};

export default Card;
