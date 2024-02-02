import { ChangeEvent, FC, useId } from "react";
import styled from "@emotion/styled";

interface IProps {
  checked?: boolean;
  onChange: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
}

const Track = styled.span``;
const Circle = styled.span``;
const Field = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Switch: FC<IProps> = (props) => {
  const { onChange, checked = false } = props;
  const id = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.checked, event);

  return (
    <label>
      <Track>
        <Circle>
          <Field type="checkbox" onChange={handleChange} checked={checked} />
        </Circle>
      </Track>
    </label>
  );
};

export default Switch;
