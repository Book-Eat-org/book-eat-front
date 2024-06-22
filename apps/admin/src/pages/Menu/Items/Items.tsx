import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { List } from "./List";
import { AddItem } from "./AddItem";

const Additions: FC = () => {
  return (
    <Routes>
      <Route index element={<List />} />
      <Route path="create" element={<AddItem />} />
      <Route path=":id" element={<AddItem />} />
    </Routes>
  );
};

export default Additions;
