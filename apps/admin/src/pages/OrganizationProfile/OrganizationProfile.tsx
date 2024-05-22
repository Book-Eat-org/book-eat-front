import { Route, Routes } from "react-router-dom";

import Main from "./Main";
import Shops from "./Shops";
import Organization from "./Organization";

const OrganizationProfile = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="shops/*" element={<Shops />} />
      <Route path="organization" element={<Organization />} />
    </Routes>
  );
};

export default OrganizationProfile;
