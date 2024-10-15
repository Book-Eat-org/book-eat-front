import { FC } from "react";

import Item from "./Item";
import classes from "./GroupList.module.css";
import { useSelector } from "react-redux";
import { Grid } from "@book-eat/ui";
import { categoriesSelectors, productsSelectors } from "$store";
import { isEmpty } from "ramda";
import { useMenuPageContext } from "../context.ts";

interface IProps {
  groupId: string;
}

const searchingTextEquals = (searchingText: string, targetText: string) =>
  isEmpty(searchingText)
    ? true
    : targetText.toLowerCase().includes(searchingText.toLowerCase());

const GroupList: FC<IProps> = (props) => {
  const { searchValue } = useMenuPageContext();
  const { groupId } = props;

  const data = useSelector(productsSelectors.selectAll);
  const categories = useSelector(categoriesSelectors.selectAll);

  const category = categories?.find((item) => item.id === groupId);

  const filteredProducts = data.filter((item) =>
    searchingTextEquals(searchValue, item.title),
  );

  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>{category?.title}</span>
      <Grid gap={3}>
        {filteredProducts.map(({ id }) => (
          <Item key={id} id={id} />
        ))}
      </Grid>
    </div>
  );
};

export default GroupList;
