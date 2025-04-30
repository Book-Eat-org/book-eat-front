import { useParams } from "react-router-dom";
import { IProduct, menuEndpoints } from "@book-eat/api";
import { flatten, innerJoin, prop, uniq } from "ramda";
import { useSelector } from "$hooks";
import { categoriesSelectors } from "../../../store/entities";
import { sortCategories } from "./utils.ts";

export const useCategories = () => {
  const { id } = useParams();
  const { data } = menuEndpoints.useGetMenuByPlaceIdQuery(id!);
  const entities: IProduct[] = Object.values(data?.entities ?? {});

  const categoriesEntities = useSelector(categoriesSelectors.selectAll);

  const categoriesIds = uniq(
    flatten(entities.map((entity) => entity.categoriesIds)),
  );

  const categories = sortCategories(
    innerJoin((item, id) => item.id === id, categoriesEntities, categoriesIds),
  );

  return categories.map(prop("id"));
};
