import { FC } from "react";
import { Flex, Typography, theme } from "@book-eat/ui";

const Empty: FC = () => (
  <Flex 
    p="40px 0"
    flexDirection="column"
    alignItems="center"
    gap={2}
  >
    <Typography size="18/18" fontWeight={700}>
      Ничего не нашлось
    </Typography>
    <Typography size="14/14" fontWeight={400} color={theme.colors.general650}>
      Попробуйте изменить запрос
    </Typography>
  </Flex>
);

export default Empty;
