import { FC, useEffect, useState } from "react";
import UIInput from "../UIInput";
import Dropdown from "../Dropdown";
import Grid from "../Grid";

interface IProps<
  T extends Record<string, unknown> = Record<string | number, unknown>,
> {
  options: T[];
  value?: T;
  textValue?: string;
  renderValue: (value: T) => string;
  onChange: (value: T) => void;
  onTextChange: (value: string) => void;
  valueExtractor: (value: T) => string;
  title?: string;
  placeholder?: string;
}
const Autocomplete: FC<IProps> = (props) => {
  const [opened, setOpened] = useState(false);

  const {
    options,
    value,
    textValue,
    valueExtractor,
    onTextChange,
    renderValue,
    onChange,
    title,
    placeholder,
  } = props;

  const onInputFocus = () => {
    setOpened(true);
  };

  const onInputBlur = () => {
    setOpened(true);
  };

  const handleChange = (value: string) => {
    if (value) {
      const founded = options.find((item) => valueExtractor(item) === value);
      onChange(founded!);
      onTextChange(renderValue(founded!));
    }
  };

  return (
    <Dropdown
      opened={opened}
      overlay={
        textValue ? (
          <Grid>
            {options.map((item) => (
              <Dropdown.Item
                key={valueExtractor(item)}
                onClick={() => {
                  handleChange(valueExtractor(item));
                  setOpened(false);
                }}
              >
                {renderValue(item)}
              </Dropdown.Item>
            ))}
          </Grid>
        ) : (
          <Dropdown.Empty />
        )
      }
    >
      <UIInput
        value={textValue}
        onChange={onTextChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        title={title}
        placeholder={placeholder}
      />
    </Dropdown>
  );
};

export default Autocomplete;
