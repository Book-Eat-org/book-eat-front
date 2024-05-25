import { Route, Routes } from "react-router-dom";
import { Create } from "./Create";
import { Detail } from "./Detail";

const Order = () => (
  <Routes>
    <Route path="create" element={<Create />} />
    <Route path=":id" element={<Detail />} />
  </Routes>
);
export default Order;
