import { FC, useState } from "react";
import Add from "./Add";
import List from "./List";
import { Grid, Page } from "@book-eat/ui";
import { AddButton } from "../Header";

const Connect: FC = () => {
  const [addUserVisible, setAddUserVisible] = useState(false);

  const handleAddCLick = () => setAddUserVisible(true);
  const handleCancelCLick = () => setAddUserVisible(false);

  return (
    <Page
      header={
        <Page.Header>
          <Page.Title right={<AddButton onClick={handleAddCLick} />}>
            Пользователи
          </Page.Title>
        </Page.Header>
      }
    >
      <Grid gap={8}>
        {addUserVisible && <Add onCancel={handleCancelCLick} />}
        <List />
      </Grid>
    </Page>
  );
};

export default Connect;
