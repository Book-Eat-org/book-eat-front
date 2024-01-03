import { FC, ReactNode } from "react";

import { UIGrid, UITypography } from "@book-eat/ui";

interface IProps {
  title: string;
  children: ReactNode;
}

const Row: FC<IProps> = (props) => {
  const { title, children } = props;
  return (
    <UIGrid colSizes="1fr 1fr" padding="10px 0">
      <UITypography variant="textMd" color="gray" weight="bold">
        {title}
      </UITypography>
      {children}
    </UIGrid>
  );
};

export default Row;
