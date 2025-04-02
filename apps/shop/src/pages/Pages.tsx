import { FC } from "react";
import { Organizations } from "./Organizations";
import { Route, Routes } from "react-router-dom";
import Shops from "./Shops/";
import { Products } from "./Products";
import Cart from "./Cart";
import Order from "./Order";
import Agreement from "./Agreement";
import PersonalConsent from "./PersonalConsent";
import { LegalInfo } from "./LegalInfo";

const Pages: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Organizations />} />
      <Route path="/organizations/:id/shops" element={<Shops />} />
      <Route path="legal-info/:id" element={<LegalInfo />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/agreement" element={<Agreement />} />
      <Route path="/personal-consent" element={<PersonalConsent />} />
      <Route path="/orders/*" element={<Order />} />
    </Routes>
  );
};

export default Pages;
