import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import List from "./List";
import Add from "./Add";
import { PAGES, PageURLS } from "$constants";

const Connect: FC = () => {
  return (
    <Routes>
      <Route index element={<List />} />
      <Route path={PAGES[PageURLS.UsersCreate]} element={<Add />} />
      <Route path={PAGES[PageURLS.UsersEdit]} element={<Add />} />
    </Routes>
  );
};

export default Connect;
