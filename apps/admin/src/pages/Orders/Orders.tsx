import { Route, Routes } from "react-router-dom";

import Items from "./Items";
import { Detail } from "./Detail";

const Orders = () => {
  return (
    <Routes>
      <Route index element={<Items />} />
      <Route path=":id" element={<Detail />} />
    </Routes>
  );
};

export default Orders;
