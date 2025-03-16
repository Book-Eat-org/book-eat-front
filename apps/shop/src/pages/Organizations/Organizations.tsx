import { Route, Routes } from "react-router-dom";
import { Items } from "./Items";

export const Organizations = () => (
  <Routes>
    <Route path="/" element={<Items />} />
  </Routes>
);
