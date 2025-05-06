import { FC } from "react";
import { useSelector } from "$hooks";
import { categoriesSelectors } from "../../../../../store/entities";
import { useCategories } from "../../hooks.ts";
import { innerJoin } from "ramda";
import { sortCategories } from "../../utils.ts";
import { ScrollProvider } from "./ScrollProvider.tsx";
import Category from "./Category/Category";
import classes from "./Categories.module.css";

const Categories: FC = () => {
  const categoriesIds = useCategories();
  const categoriesEntities = useSelector(categoriesSelectors.selectAll);

  const categories = innerJoin(
    (item, id) => item.id === id,
    categoriesEntities,
    categoriesIds,
  );

  if (!categories) return null;

  const sortedCategories = sortCategories(categories);

  return (
    <ScrollProvider className={classes.wrap}>
      {sortedCategories.map((item) => (
        <Category 
          key={item.id}
          id={String(item.id)} 
          title={item.title} 
        />
      ))}
    </ScrollProvider>
  );
};

export default Categories;
