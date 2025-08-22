import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { isNil } from "ramda";
import { Box, Image } from "@book-eat/ui";
import TimeTag from "./TimeTag";
import classes from "./Card.module.css";
import { navigateToPage, PageURLS } from "$constants";
import { useNavigate } from "react-router-dom";
import { placesSelectors } from "@book-eat/api";
import { useSelector } from "$hooks";
import { CardContext } from "./context.ts";
import { Address } from "./Address";
import { Details } from "./Details";
import { isShopOpen } from "@book-eat/utils";

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
  const isClosed = !isShopOpen(item);

  const { logoUrl } = item;

  const onClick = () => {
    if (isClosed) {
      return;
    }
    const url = navigateToPage(PageURLS.PRODUCTS, {
      id,
    });
    navigate(url);
  };

  return (
    <CardContext.Provider value={{ id }}>
      <Box
        bg="white"
        borderRadius="20px"
        width="100%"
        className={classes.wrapper}
        opacity={isClosed ? 0.5 : 1}
        data-card="true"
      >
        <TimeTag />
        <Box p="2px" borderRadius="20px">
          <Image
            size={1200}
            className={classes.image}
            src={logoUrl}
            onClick={onClick}
          />
          <Address />
          <Details />
        </Box>
      </Box>
    </CardContext.Provider>
  );
};

export default Card;
