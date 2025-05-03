import { FC } from "react";
import { Flex } from "$components";
import { theme } from "$theme";
import Input from "../Input";
import Button from "../Button";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
  placeholder?: string;
  title?: string;
}

const Content: FC<IProps> = (props) => {
  const {
    value,
    onChange,
    onClose,
    placeholder,
    title = "Отменить"
  } = props;

  return (
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
      />
      <Button variant="outline" onClick={onClose}>
        {title}
      </Button>
    </Flex>
  );
};

export default Content;
