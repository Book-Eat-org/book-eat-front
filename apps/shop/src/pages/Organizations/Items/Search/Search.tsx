import { FC } from "react";
import { Flex, SearchIcon18, theme } from "@book-eat/ui";

interface IProps {
  onClick: () => void;
}

const Search: FC<IProps> = ({ onClick }) => {
  return (
    <Flex
      backgroundColor={theme.colors.accent50}
      borderRadius={10}
      padding="9px"
      onClick={onClick}
    >
      <SearchIcon18 />
    </Flex>
  );
};

export default Search;
