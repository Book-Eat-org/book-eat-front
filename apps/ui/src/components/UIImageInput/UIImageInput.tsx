import { isNil } from "ramda";
import {
  ChangeEvent,
  ChangeEventHandler,
  ComponentProps,
  FC,
  useState,
} from "react";

import classes from "./UIImageInput.module.css";
import Crop from "./Crop";
import { PlaceholderImage } from "$assets";
import classNames from "classnames";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

const getDataUrlFromFile = (file: File) =>
  new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(file);
  });

interface IProps extends Omit<ComponentProps<"input">, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const UIImageInput: FC<IProps> = (props) => {
  const { value, onChange, ...restProps } = props;

  const [selected, setSelected] = useState(value);
  const [cropping, setCropping] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const imageFile = event?.target?.files?.[0];
    if (!imageFile) {
      return;
    }

    const dataUrl = await getDataUrlFromFile(imageFile);
    setSelected(dataUrl);
    setCropping(true);
  };
  const handleSubmit = (value: string) => {
    setCropping(false);
    onChange?.(value);
  };

  const onCancel = () => {
    setCropping(false);
  };

  const imageClasses = classNames(classes.image, {
    [classes.error]: restProps.error,
  });

  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="file-input">
        <img src={value ?? PlaceholderImage} className={imageClasses} alt="" />
        {isNil(value) && <div className={classes.addWrapper}>+</div>}
      </label>
      <input
        id="file-input"
        type="file"
        accept=".jpg, .jpeg"
        onChange={handleChange}
        className={classes.imageInput}
        {...restProps}
      />
      <span className={classes.description}>jpg, до 5 МБ</span>
      {cropping && selected && (
        <Crop url={selected} onChange={handleSubmit} onCancel={onCancel} />
      )}
    </div>
  );
};

export default UIImageInput;
