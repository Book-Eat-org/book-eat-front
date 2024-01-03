import { Route, Routes } from "react-router-dom";

import Main from "./Main";
import Additions from "./Additions";
import Items from "./Items";
import Groups from "./Groups";

const Menu = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="additions" element={<Additions />} />
      <Route path="items" element={<Items />} />
      <Route path="categories" element={<Groups />} />
    </Routes>
  );
};

export default Menu;
