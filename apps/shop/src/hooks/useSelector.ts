import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../store";
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
