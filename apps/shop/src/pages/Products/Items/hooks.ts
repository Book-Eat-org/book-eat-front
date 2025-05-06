import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProduct, menuEndpoints, categoriesEndpoints, placesEndpoints } from "@book-eat/api";
import { flatten, innerJoin, prop, uniq } from "ramda";
import { useSelector } from "$hooks";
import { categoriesSelectors } from "../../../store/entities";
import { sortCategories } from "./utils.ts";

export const useCategories = () => {
  const { id } = useParams();
  
  const { data: menuData } = menuEndpoints.useGetMenuByPlaceIdQuery(id!);
  const { data: places, isLoading: isPlacesLoading } = placesEndpoints.useFetchPlacesQuery();
  const [triggerCategories] = categoriesEndpoints.useLazyLoadCategoriesListQuery();
  
  useEffect(() => {
    if (isPlacesLoading || !id) return;

    const organizationId = places?.entities?.[id]?.organizationId;
    if (!organizationId) return;

    const loadCategories = async () => {
      try {
        await triggerCategories(organizationId);
      } catch (error) {
        console.error("Error loading categories");
      }
    };

    loadCategories();
  }, [places, id, isPlacesLoading, triggerCategories]);

  const menuEntities: IProduct[] = Object.values(menuData?.entities ?? {});
  const menuCategoriesIds = uniq(flatten(menuEntities.map((entity) => entity.categoriesIds))) || [];

  const categoriesEntities = useSelector(categoriesSelectors.selectAll);
  const categoriesIds = uniq([
    ...menuCategoriesIds,
  ]);

  const categories = sortCategories(
    innerJoin((item, id) => item.id === id, categoriesEntities, categoriesIds),
  );

  return categories.map(prop("id"));
};
