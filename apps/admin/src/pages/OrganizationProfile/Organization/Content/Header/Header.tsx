import { Flex, Grid, UITypography } from "@book-eat/ui";
import { Image } from "./Image";

const Header = () => {
  return (
    <Flex gap={4}>
      <Image />
      <UITypography variant="textMd" color="gray">
        Пожалуйста, введите актуальные контактные данные. Они будут отображаться
        на главной странице и передаваться в службу доставки.
      </UITypography>
    </Flex>
  );
};

export default Header;
