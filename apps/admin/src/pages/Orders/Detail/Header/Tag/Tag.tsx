import { Flex, theme, Typography } from "@book-eat/ui";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Tag: FC<IProps> = ({ children }) => (
  <Flex padding={2} backgroundColor={theme.colors.general300} borderRadius={20}>
    <Typography size="14/14" fontWeight={500}>
      {children}
    </Typography>
  </Flex>
);
