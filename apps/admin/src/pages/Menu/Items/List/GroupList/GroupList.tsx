import { FC } from "react";

import Item from "./Item";
import classes from "./GroupList.module.css";
import { useSelector } from "react-redux";
import { categoriesSelectors, menuSelectors } from "$api";
import { Grid } from "@book-eat/ui";

interface IProps {
  groupId: string;
}

const GroupList: FC<IProps> = (props) => {
  const { groupId } = props;

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
