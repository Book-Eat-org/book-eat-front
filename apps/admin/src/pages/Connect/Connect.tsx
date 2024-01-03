import  { FC, useState } from "react";

import Header from "../Header";
import Add from "./Add";
import List from "./List";
import { UIGrid } from "@book-eat/ui";

const Connect: FC = () => {
  const [addUserVisible, setAddUserVisible] = useState(false);

  const handleAddCLick = () => setAddUserVisible(true);
  const handleCancelCLick = () => setAddUserVisible(false);

  return (
    <UIGrid gap="60px">
      <Header title="Пользователи" onAddClick={handleAddCLick} />
      <UIGrid gap="40px">
        {addUserVisible && <Add onCancel={handleCancelCLick} />}
        <List />
      </UIGrid>
    </UIGrid>
  );
};

export default Connect;
