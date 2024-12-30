import { Route, Routes } from "react-router-dom";

import Main from "./Main";
import Shops from "./Shops";
import Organization from "./Organization";
import Promos from "./Promos";

const OrganizationProfile = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="shops/*" element={<Shops />} />
      <Route path="organization" element={<Organization />} />
      <Route path="promos/*" element={<Promos />} />
    </Routes>
  );
};

export default OrganizationProfile;
