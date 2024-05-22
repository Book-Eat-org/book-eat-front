import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import Connect from "./Connect";
import { useCheckAuth } from "$hooks";
import { Login } from "./Login";
import Orders from "./Orders";
import OrganizationProfile from "./OrganizationProfile";
import Menu from "./Menu";
import { PAGES, PageURLS } from "$constants";

const NewAdminPage: FC = () => {
  const { isLoading, authorized } = useCheckAuth();

  if (isLoading) {
    return <span>loading</span>;
  }

  if (!authorized) {
    return (
      <Routes>
        <Route path={PAGES[PageURLS.Login]} element={<Login />} />
        <Route
          path="*"
          element={<Navigate to={PAGES[PageURLS.Login]} replace />}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="connect/*" element={<Connect />} />
        <Route path="orders/*" element={<Orders />} />
        <Route path="profile/*" element={<OrganizationProfile />} />
        <Route path="menu/*" element={<Menu />} />
        <Route path="*" element={<Navigate to="connect" replace />} />
      </Route>
    </Routes>
  );
};

export default NewAdminPage;
