import { FC, ReactNode, useRef } from "react";
import { Flex, Box } from "$components";
import { useClickOutside } from "$hooks";
import { theme } from "$theme";
import Input from "./Input";
import Button from "./Button";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  active: boolean;
  onClick: () => void;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  placeholder?: string;
  title?: string;
}

interface SearchInputContentProps {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
  placeholder?: string;
  title?: string;
}

const Content: FC<SearchInputContentProps> = (props) => {
  const {
    value,
    onChange,
    onClose,
    placeholder,
    title = "Отменить"
  } = props;

  return (
    <Box width="100%">
      <Flex
        padding="10px 0"
        borderRadius="15px"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={theme.colors.general50}
        width="100%"
      >
        <Input
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
        <Button variant="outline" onClick={onClose}>
          {title}
        </Button>
      </Flex>
    </Box>
  );
};

const SearchInput: FC<SearchInputProps> & {
  Content: typeof Content;
} = ({ active, onClick, value, onChange, children, placeholder, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, onClick);

  if (!active) return children;

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <SearchInput.Content
        value={value}
        onChange={onChange}
        onClose={onClick}
        placeholder={placeholder}
        title={title}
      />
    </div>
  );
};

SearchInput.Content = Content;

export default SearchInput;