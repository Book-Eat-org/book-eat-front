import { Route, Routes } from "react-router-dom";
import { Items } from "./Items";
import { Card } from "./Card";

export const Products = () => (
  <Routes>
    <Route path="detail/:id" element={<Card />} />
    <Route path=":id" element={<Items />} />
  </Routes>
);
