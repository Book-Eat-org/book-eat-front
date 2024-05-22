import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { List } from "./List";
import Add from "./AddItem";

const Connect: FC = () => {
  return (
    <Routes>
      <Route index element={<List />} />
      <Route path="create" element={<Add />} />
      <Route path=":id" element={<Add />} />
    </Routes>
  );
};

export default Connect;
