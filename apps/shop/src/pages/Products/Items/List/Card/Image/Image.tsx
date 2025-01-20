import { useCard } from "../../../context.ts";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import classes from "./Image.module.css";
import { Box } from "@book-eat/ui";
import { useProductListContext } from "../../context.ts";

interface IProps {
  id: EntityId;
}

const Image: FC<IProps> = ({ id }) => {
  const { mainImageUrl } = useCard(id);
  const { setOpenedProductId } = useProductListContext();

  const onAddCart = () => setOpenedProductId(id);

  return (
    <Box p="2px" onClick={onAddCart}>
      <img
        src={mainImageUrl + "?resolution=400"}
        alt=""
        className={classes.image}
      />
    </Box>
  );
};

export default Image;
