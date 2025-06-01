import { FC, ReactNode, useRef } from "react";
import { useClickOutside } from "$hooks";
import Content from "./Content";
import styles from "./SearchInput.module.css";

interface IProps {
  active: boolean;
  onClick: () => void;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  placeholder?: string;
  title?: string;
}

const SearchInput: FC<IProps> & { Content: typeof Content } = (props) => {
  const { active, onClick, value, onChange, children, placeholder, title } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, onClick);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={`${styles.content} ${active ? styles.hidden : styles.visible}`}>
        {children}
      </div>
      <div className={`${styles.search} ${active ? styles.visible : styles.hidden}`}>
        <SearchInput.Content
          value={value}
          onChange={onChange}
          onClose={onClick}
          placeholder={placeholder}
          title={title}
        />
      </div>
    </div>
  );
};

SearchInput.Content = Content;

export default SearchInput;