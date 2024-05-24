import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { isNil } from "ramda";
import { Box, Grid, Typography } from "@book-eat/ui";
import TimeTag from "./TimeTag";
import classes from "./Card.module.css";
import { navigateToPage, PageURLS } from "../../../../constants/urls";
import { useNavigate } from "react-router-dom";
import { placesSelectors } from "@book-eat/api";
import { useSelector } from "$hooks";

interface IProps {
  id: EntityId;
}

const Card: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { id } = props;
  const item = useSelector((state) => placesSelectors.selectById(state, id));

  if (isNil(item)) {
    return null;
  }

  const { logoUrl, title } = item;

  const onClick = () => {
    const url = navigateToPage(PageURLS.PRODUCTS, {
      id,
    });
    navigate(url);
  };

  return (
    <Box
      bg="white"
      borderRadius="20px"
      width="100%"
      className={classes.wrapper}
      onClick={onClick}
    >
      <TimeTag />
      <Box p="2px" borderRadius="20px">
        <img
          src={
            logoUrl ??
            "https://archive.org/download/placeholder-image/placeholder-image.jpg"
          }
          alt=""
          style={{ height: 194, width: "100%" }}
          className={classes.image}
        />
        <Grid padding="5px 10px" gap={1}>
          <Typography size="20/24">{title}</Typography>
          <Typography size="14/14">Адрес</Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Card;
