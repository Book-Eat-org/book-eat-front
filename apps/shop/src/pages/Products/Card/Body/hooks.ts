import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { productsSelectors } from "../../../../store/entities";
import { IRootState } from "../../../../store";

export const useProduct = () => {
  const { id } = useParams();
  return useSelector((state: IRootState) =>
    productsSelectors.selectById(state, id!),
  )!;
};
