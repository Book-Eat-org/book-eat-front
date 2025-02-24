import { Flex, theme } from "@book-eat/ui";
import Categories from "./Categories";

const Header = () => {
  return (
    <Flex 
      p="8px 15px 10px" 
      position="sticky" 
      top="-15px"
      zIndex="10" 
      backgroundColor={theme.colors.general200} 
      overflow="hidden"
    >
      <Categories />
    </Flex>
  );
};

export default Header;
