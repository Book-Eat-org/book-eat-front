import { FC } from "react";
import { useSelector } from "$hooks";
import { categoriesSelectors } from "../../../../../store/entities";
import { useCategories } from "../../hooks.ts";
import { innerJoin } from "ramda";
import { sortCategories } from "../../utils.ts";
import { ListNavigation } from "@book-eat/ui";

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
    <ListNavigation.NavScrollProvider>
      {sortedCategories.map((item) => (
        <ListNavigation.MenuNavItem autoscroll key={item.id} id={item.id}>
          {item.title}
        </ListNavigation.MenuNavItem>
      ))}
    </ListNavigation.NavScrollProvider>
  );
};

export default Categories;
