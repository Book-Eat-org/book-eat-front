import { FC } from "react";
import Organizations from "./Organizations";
import { Route, Routes } from "react-router-dom";
import Shops from "./Shops";
import { Products } from "./Products";
import Cart from "./Cart";
import Order from "./Order";

const Pages: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Organizations />} />
      <Route path="/organizations/:id/shops" element={<Shops />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders/*" element={<Order />} />
    </Routes>
  );
};

export default Pages;
