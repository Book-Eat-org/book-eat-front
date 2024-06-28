import { Route, Routes } from "react-router-dom";
import { Items } from "./Items";
import { LegalInfo } from "./LegalInfo";

export const Organizations = () => (
  <Routes>
    <Route path="/" element={<Items />} />
    <Route path="legal-info/:id" element={<LegalInfo />} />
  </Routes>
);
