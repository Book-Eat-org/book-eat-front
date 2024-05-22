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
import classNames from "classnames";
import { Add } from "./Add";

interface IProps extends Omit<ComponentProps<"input">, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const UIImageInput: FC<IProps> = (props) => {
  const { value, onChange, ...restProps } = props;

  const [selected, setSelected] = useState<File | undefined>();
  const [cropping, setCropping] = useState(false);

  const uploadImage = async (value: Blob): Promise<string> => {
    if (!selected) {
      return "";
    }

    const formData = new FormData();

    formData.append("file", value, "image.png");

    const response = await fetch("/book-eat/api/v1/files/image", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    return result.imageUrl;
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const imageFile = event?.target?.files?.[0];
    if (!imageFile) {
      return;
    }
    setSelected(imageFile);
    setCropping(true);
  };
  const handleSubmit = async (value: Blob) => {
    const url = await uploadImage(value);
    setCropping(false);
    onChange?.(url);
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
        {isNil(value) ? (
          <Add />
        ) : (
          <img src={value} className={imageClasses} alt="" />
        )}
      </label>
      <input
        id="file-input"
        type="file"
        accept=".jpg, .jpeg"
        onChange={handleChange}
        className={classes.imageInput}
        {...restProps}
      />
      {cropping && selected && (
        <Crop file={selected} onChange={handleSubmit} onCancel={onCancel} />
      )}
    </div>
  );
};

export default UIImageInput;
