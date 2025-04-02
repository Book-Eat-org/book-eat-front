import { FC, ReactNode, useRef } from "react";
import { Flex, Box, UIButton, theme } from "@book-eat/ui";
import { useShopsContext } from "../context";
import { useClickOutside } from "@book-eat/ui";
import styles from "./SearchInput.module.css";

interface IProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

const SearchInput: FC<IProps> = ({ active, onClick, children }) => {
  const { searchValue, setSearchValue } = useShopsContext();
  const containerRef = useRef<HTMLInputElement | null>(null);

  useClickOutside(containerRef, onClick);
  
  if (!active) return children;

  return (
    <Box ref={containerRef}>
      <Flex
        padding="10px 0"
        borderRadius="15px"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={theme.colors.general50}
      >
        <input
          type="search"
          value={searchValue}
          className={styles.input}
          placeholder="Найти ресторан"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <UIButton 
          variant="outline"
          size="textLg"
          weight="normal"
          uppercase={false}
          onClick={onClick}
        >
          Отменить
        </UIButton>
      </Flex>
    </Box>
  )
}

export default SearchInput;