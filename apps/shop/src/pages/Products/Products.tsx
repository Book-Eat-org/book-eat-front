import { Route, Routes } from "react-router-dom";
import { Items } from "./Items";

export const Products = () => (
  <Routes>
    <Route path=":id" element={<Items />} />
  </Routes>
);
