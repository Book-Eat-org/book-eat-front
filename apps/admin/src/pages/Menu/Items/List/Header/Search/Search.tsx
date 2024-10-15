import {
  BackIcon24,
  Flex,
  PlusIcon24,
  SearchIcon18,
  theme,
  UIInput,
} from "@book-eat/ui";
import { useMenuPageContext } from "../../context.ts";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "$constants";

export const Search = () => {
  const navigate = useNavigate();
  const handleAddCLick = () =>
    navigate(navigateToPage(PageURLS.MenuListCreate, {}));
  const { setSearchModeActive, searchModeActive, setSearchValue, searchValue } =
    useMenuPageContext();

  const toggleSearchModeActive = () => setSearchModeActive(!searchModeActive);

  if (!searchModeActive) {
    return (
      <Flex gap={1}>
        <Flex
          backgroundColor={theme.colors.accent50}
          borderRadius={10}
          padding="9px"
          onClick={toggleSearchModeActive}
        >
          <SearchIcon18 />
        </Flex>
        <Flex
          backgroundColor={theme.colors.accent50}
          borderRadius={10}
          padding="6px"
        >
          <PlusIcon24 onClick={handleAddCLick} />
        </Flex>
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
        title="Введите чет"
        type="text"
      />
    </Flex>
  );
};
