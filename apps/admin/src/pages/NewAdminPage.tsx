import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import Connect from "./Connect";
import { PAGE_URLS } from "$constants";
import { useCheckAuth } from "$hooks";
import { Login } from "./Login";
import Orders from "./Orders";
import OrganizationProfile from "./OrganizationProfile";
import Menu from "./Menu";

const NewAdminPage: FC = () => {
  const { isLoading, authorized } = useCheckAuth();

  if (isLoading) {
    return <span>loading</span>;
  }

  if (!authorized) {
    return (
      <Routes>
        <Route path={PAGE_URLS.LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate to={PAGE_URLS.LOGIN} replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={PAGE_URLS.CONNECT} element={<Connect />} />
        <Route path={PAGE_URLS.ORDERS} element={<Orders />} />
        <Route path="admin/my*" element={<OrganizationProfile />} />
        <Route path="admin/menu/*" element={<Menu />} />
        <Route path="*" element={<Navigate to={PAGE_URLS.MAIN} replace />} />
        {/*<Route path={PAGE_URLS.MENU}>*/}
        {/*  <Menu />*/}
        {/*</Route>*/}
        {/*<Route path={PAGE_URLS.ORGANIZATION}>*/}
        {/*  <OrganizationProfile />*/}
        {/*</Route>*/}
      </Route>
    </Routes>
  );
};

export default NewAdminPage;
