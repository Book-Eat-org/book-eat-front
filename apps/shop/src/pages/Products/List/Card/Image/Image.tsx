import { useCard } from "../../../context.ts";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import classes from "../Card.module.css";
import { Box } from "@book-eat/ui";

interface IProps {
  id: EntityId;
}

const Image: FC<IProps> = ({ id }) => {
  const { mainImageUrl } = useCard(id);

  return (
    <Box p={2}>
      <img
        src={
          mainImageUrl ??
          "https://archive.org/download/placeholder-image/placeholder-image.jpg"
        }
        alt=""
        style={{ height: 194, width: "100%" }}
        className={classes.image}
      />
    </Box>
  );
};

export default Image;
