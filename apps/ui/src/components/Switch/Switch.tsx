import { ChangeEvent, FC, useId } from "react";
import styled from "@emotion/styled";
import { theme } from "$theme";

interface IProps {
  checked?: boolean;
  onChange: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
}

const Track = styled.span`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 26px;
  border-radius: 34px;
`;
const Circle = styled.span<{ checked?: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.checked ? theme.colors.accent500 : theme.colors.general400};
  transition: 0.4s;
  border-radius: 34px;
  :before {
    box-shadow:
      0 3px 1px 0 rgba(0, 0, 0, 0.06),
      0 3px 8px 0 rgba(0, 0, 0, 0.15);
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 2px;
    top: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) =>
      props.checked ? `translateX(14px)` : `translateX(0)`};
  }
`;
const Field = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Switch: FC<IProps> = (props) => {
  const { onChange, checked = false } = props;
  const id = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.checked, event);

  return (
    <label htmlFor={id} onClick={(e) => e.stopPropagation()}>
      <Track>
        <Circle checked={checked}>
          <Field
            id={id}
            type="checkbox"
            onChange={handleChange}
            checked={checked}
          />
        </Circle>
      </Track>
    </label>
  );
};

export default Switch;
