import { FC, ReactNode } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { Grid } from "@book-eat/ui";
import { useSelector } from "$hooks";

interface IProps {
  children: ReactNode;
  id: EntityId;
}

export const Group: FC<IProps> = (props) => {
  const { children, id } = props;

  const categories = useSelector((state) => state.categories.categoriesList);

  return (
    <Grid>
      <span>{id}</span>
      <div>{children}</div>
    </Grid>
  );
};
