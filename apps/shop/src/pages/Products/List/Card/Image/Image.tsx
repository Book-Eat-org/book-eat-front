import { useCard } from "../../../context.ts";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import classes from "../Card.module.css";

interface IProps {
  id: EntityId;
}

const Image: FC<IProps> = ({ id }) => {
  const { logoUrl } = useCard(id);

  return (
    <img
      src={
        logoUrl ??
        "https://archive.org/download/placeholder-image/placeholder-image.jpg"
      }
      alt=""
      style={{ height: 194, width: "100%" }}
      className={classes.image}
    />
  );
};

export default Image;
