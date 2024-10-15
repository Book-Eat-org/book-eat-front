import { BackIcon24, Flex, SearchIcon18, theme, UIInput } from "@book-eat/ui";
import { useOrdersPageContext } from "../../context.ts";

export const Search = () => {
  const { setSearchModeActive, searchModeActive, setSearchValue, searchValue } =
    useOrdersPageContext();

  const toggleSearchModeActive = () => setSearchModeActive(!searchModeActive);

  if (!searchModeActive) {
    return (
      <Flex
        backgroundColor={theme.colors.accent50}
        borderRadius={10}
        padding="9px"
        onClick={toggleSearchModeActive}
      >
        <SearchIcon18 />
      </Flex>
    );
  }

  return (
    <Flex gap={3} width="100% ">
      <Flex
        backgroundColor={theme.colors.accent50}
        borderRadius={10}
        padding="6px"
        onClick={toggleSearchModeActive}
        height="fit-content"
      >
        <BackIcon24 />
      </Flex>
      <UIInput
        value={searchValue}
        onChange={setSearchValue}
        title="Поиск"
        type="text"
      />
    </Flex>
  );
};
