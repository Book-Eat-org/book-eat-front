import { FC, ReactNode, useRef } from "react";
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
  containerRef?: React.RefObject<HTMLDivElement>;
}

const SearchInput: FC<IProps> & { Content: typeof Content } = (props) => {
  const { active, onClick, value, onChange, children, placeholder, title, containerRef } = props;
  const defaultRef = useRef<HTMLDivElement>(null);
  const finalRef = containerRef || defaultRef;

  return (
    <div ref={finalRef} className={styles.container}>
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