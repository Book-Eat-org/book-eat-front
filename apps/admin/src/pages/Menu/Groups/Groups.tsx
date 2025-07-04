import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { List } from "./List";
import Add from "./AddItem";
import Settings from "./Settings";

const Additions: FC = () => {
  return (
    <Routes>
      <Route index element={<List />} />
      <Route path="create" element={<Add />} />
      <Route path="settings" element={<Settings />} />
      <Route path=":id" element={<Add />} />
    </Routes>
  );
};

export default Additions;
