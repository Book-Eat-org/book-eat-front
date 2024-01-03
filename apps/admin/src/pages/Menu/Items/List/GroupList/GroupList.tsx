import { intersection, isEmpty } from "ramda";
import { FC } from "react";

import Item from "./Item";
import classes from "./GroupList.module.css";
import { useSelector } from "react-redux";
import { categoriesSelectors, menuSelectors } from "$api";

interface IProps {
  groupId: string;
  points: number[];
}

const GroupList: FC<IProps> = (props) => {
  const { groupId, points } = props;

  const data = useSelector(menuSelectors.selectAll);
  const categories = useSelector(categoriesSelectors.selectAll);

  const items = data.filter(
    ({ inStock, group_id }) =>
      (isEmpty(points) ? true : !isEmpty(intersection(inStock, points))) &&
      group_id.includes(groupId),
  );

  const category = categories?.find((item) => item.grouppingsId === groupId);

  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>{category?.title}</span>
      <div className={classes.list}>
        {items.map(({ guid }) => (
          <Item key={guid} id={guid} />
        ))}
      </div>
    </div>
  );
};

export default GroupList;
