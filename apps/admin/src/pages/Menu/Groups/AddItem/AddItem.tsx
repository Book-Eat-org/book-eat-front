import { FC, useState } from "react";

import { UIButton, UIGrid, UIInput } from "@book-eat/ui";
import { categoriesEndpoints } from "$api";

interface IProps {
  onCancel: () => void;
}

const AddItem: FC<IProps> = (props) => {
  const { onCancel } = props;

  const [title, setTitle] = useState("");
  const [trigger] = categoriesEndpoints.useCreateCategoryMutation();

  const onSubmit = async () => {
    await trigger({ title, isActive: true });
    onCancel();
  };

  return (
    <UIGrid gap="30px" padding="0 0 20px">
      <UIInput
        placeholder="Название категории"
        value={title}
        onChange={setTitle}
      />
      <UIGrid colSizes="1fr 2fr" gap="64px">
        <UIButton variant="secondary" onClick={onCancel}>
          Отменить
        </UIButton>
        <UIButton onClick={onSubmit}>Добавить категорию</UIButton>
      </UIGrid>
    </UIGrid>
  );
};

export default AddItem;
