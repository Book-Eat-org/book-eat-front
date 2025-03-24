import { FC, ReactNode } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { Grid, ListNavigation, theme, Typography } from "@book-eat/ui";
import { useSelector } from "$hooks";
import { isNil } from "ramda";
import { categoriesSelectors } from "../../../../../store/entities";

interface IProps {
  children: ReactNode;
  id: EntityId;
}

export const Group: FC<IProps> = (props) => {
  const { children, id } = props;

  const item = useSelector((state) =>
    categoriesSelectors.selectById(state, id),
  );

  if (isNil(item)) {
    return null;
  }

  const { title } = item;

  return (
    <ListNavigation.TargetItem id={id}>
      <Grid gap={4}>
        <Typography
          size="24/24"
          color={theme.colors.general600}
          fontWeight={600}
        >
          {title}
        </Typography>
        <div>{children}</div>
      </Grid>
    </ListNavigation.TargetItem>
  );
};
