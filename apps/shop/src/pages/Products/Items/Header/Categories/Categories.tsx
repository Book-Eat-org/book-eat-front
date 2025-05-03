import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { categoriesEndpoints, placesEndpoints } from "@book-eat/api";
import { categoriesActions } from "../../../../../store/categories";
import Category from "./Category/Category";
import classes from "./Categories.module.css";
import { useSelector } from "$hooks";
import { categoriesSelectors } from "../../../../../store/entities";
import { useCategories } from "../../hooks.ts";
import { innerJoin } from "ramda";
import { sortCategories } from "../../utils.ts";
import ScrollContainer from "./ScrollContainer";
import { ScrollProvider } from "./context.tsx";

const Categories: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const categoriesIds = useCategories();
  const categoriesEntities = useSelector(categoriesSelectors.selectAll);

  const categories = innerJoin(
    (item, id) => item.id === id,
    categoriesEntities,
    categoriesIds,
  );

  const { data: places, isLoading: isPlacesLoading } = placesEndpoints.useFetchPlacesQuery();
  const [triggerCategories] = categoriesEndpoints.useLazyLoadCategoriesListQuery();

  useEffect(() => {
    if (isPlacesLoading || !id) return;

    const organizationId = places?.entities?.[id]?.organizationId;
    if (!organizationId) return;

    const loadCategories = async () => {
      try {
        const { data } = await triggerCategories(organizationId);
        data && dispatch(categoriesActions.setCategoriesList(data));
      } catch (error) {
        console.error("Error loading categories");
      }
    };

    loadCategories();
  }, [places, id, isPlacesLoading, dispatch, triggerCategories]);

  if (!categories) return null;

  const sortedCategories = sortCategories(categories);

  return (
    <ScrollProvider className={classes.wrap}>
      {sortedCategories.map((item) => (
        <ScrollContainer key={item.id} id={item.id}>
          <Category id={item.id} title={item.title} />
        </ScrollContainer>
      ))}
    </ScrollProvider>
  );
};

export default Categories;
