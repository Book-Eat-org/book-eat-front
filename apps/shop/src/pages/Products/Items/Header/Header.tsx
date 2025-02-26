import { Flex, theme } from "@book-eat/ui";
import Categories from "./Categories";

const Header = () => {
  return (
    <Flex 
      position="sticky" 
      top="-16px"
      zIndex="10" 
      backgroundColor={theme.colors.general200} 
      overflow="hidden"
    >
      <Categories />
    </Flex>
  );
};

export default Header;
