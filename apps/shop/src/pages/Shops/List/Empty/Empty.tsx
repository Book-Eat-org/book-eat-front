import { FC } from "react";
import { Flex, Typography } from "@book-eat/ui";

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
    <Typography size="14/14" fontWeight={400} color="#6C6C6C">
      Попробуйте изменить запрос
    </Typography>
  </Flex>
);

export default Empty;
