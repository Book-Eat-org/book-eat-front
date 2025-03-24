import { FC, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { categoriesEndpoints } from "@book-eat/api";
import { placesEndpoints } from "@book-eat/api";
import { categoriesActions } from "../../../../../store/categories";
import Category from "./Category/Category";
import classes from "./Categories.module.css";
import { useSelector } from "$hooks";
import { categoriesSelectors } from "../../../../../store/entities";
import { useCategories } from "../../hooks.ts";
import { innerJoin } from "ramda";

const Categories: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const categoriesIds = useCategories();
  const categoriesEntities = useSelector(categoriesSelectors.selectAll);

  const categories = innerJoin(
    (item, id) => item.id === id,
    categoriesEntities,
    categoriesIds,
  );

  const { data: places } = placesEndpoints.useFetchPlacesQuery();
  const [triggerCategories] =
    categoriesEndpoints.useLazyLoadCategoriesListQuery();

  useEffect(() => {
    if (!places && !id) {
      return;
    }

    const organizationId = places?.entities?.[id!].organizationId;

    if (organizationId) {
      const loadCategories = async () => {
        try {
          const { data } = await triggerCategories(organizationId);
          if (data) {
            dispatch(categoriesActions.setCategoriesList(data));
          }
        } catch (error) {
          throw new Error("Error load categories");
        }
      };
      loadCategories();
    }
  }, [places, id]);

  if (!categories) return null;

  console.log(categories);

  return (
    <div ref={containerRef} className={classes.wrap}>
      {categories.map((item) => (
        <Category id={item.id} key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default Categories;
