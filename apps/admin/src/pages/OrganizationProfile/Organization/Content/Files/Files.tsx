import { useController } from "react-hook-form";

import { UIGrid } from "@book-eat/ui";

import { IFormValues } from "../models";
import { File } from "./File";
import { Add } from "./Add";

export const Files = () => {
  const { field, fieldState } = useController<IFormValues, "files">({
    name: "files",
    rules: { required: { value: true, message: "Выберите изображение" } },
  });

  const { value: values } = field;

  return (
    <UIGrid gap="64px 42px" colSizes="repeat(3,1fr)">
      <Add />
      {values?.map(({ id }) => <File key={id} id={id} />)}
    </UIGrid>
  );
};
