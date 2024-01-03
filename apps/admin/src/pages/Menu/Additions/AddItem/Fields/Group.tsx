import { FC } from "react";
import { useController } from "react-hook-form";

import { UIOption, UISelect } from "@book-eat/ui";

import { IFormValues } from "../models";
import { categoriesSelectors } from "$api";
import { useSelector } from "react-redux";

export const Group: FC = () => {
  const { field } = useController<IFormValues, "groupId">({
    name: "groupId",
  });
  const { onChange, value } = field;

  const data = useSelector(categoriesSelectors.selectAll);

  return (
    <UISelect
      value={value}
      onChange={onChange}
      placeholder="Категория"
      renderValue={(value: string) =>
        data.find(({ grouppingsId }) => grouppingsId === value)?.title
      }
    >
      {data?.map(({ title, grouppingsId }) => (
        <UIOption key={grouppingsId} value={grouppingsId}>
          {title}
        </UIOption>
      ))}
    </UISelect>
  );
};

export default Group;
