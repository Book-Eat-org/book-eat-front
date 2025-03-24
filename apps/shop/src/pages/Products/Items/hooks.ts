import { useParams } from "react-router-dom";
import { IProduct, menuEndpoints } from "@book-eat/api";
import { flatten, uniq } from "ramda";

export const useCategories = () => {
  const { id } = useParams();
  const { data } = menuEndpoints.useGetMenuByPlaceIdQuery(id!);
  const entities: IProduct[] = Object.values(data?.entities ?? {});

  return uniq(flatten(entities.map((entity) => entity.categoriesIds)));
};
