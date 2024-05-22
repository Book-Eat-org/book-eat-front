import { intersection, isEmpty } from "ramda";
import { FC } from "react";

import Item from "./Item";
import classes from "./GroupList.module.css";
import { useSelector } from "react-redux";
import { categoriesSelectors, menuSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { Grid } from "@book-eat/ui";

interface IProps {
  groupId: string;
  points: EntityId[];
}

const GroupList: FC<IProps> = (props) => {
  const { groupId, points } = props;

  const data = useSelector(menuSelectors.selectAll);
  const categories = useSelector(categoriesSelectors.selectAll);

  const category = categories?.find((item) => item.id === groupId);

  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>{category?.title}</span>
      <Grid gap={3}>
        {data.map(({ id }) => (
          <Item key={id} id={id} />
        ))}
      </Grid>
    </div>
  );
};

export default GroupList;
