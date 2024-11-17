import { useSelector } from "react-redux";
import { productsSelectors } from "../../../../../store/entities";
import { IRootState } from "../../../../../store";
import { useProductListContext } from "../context.ts";

export const useProduct = () => {
  const { openedProductId } = useProductListContext();
  return useSelector((state: IRootState) =>
    productsSelectors.selectById(state, openedProductId!),
  )!;
};
