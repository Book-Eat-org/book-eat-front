import { isNil } from "ramda";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  ComponentProps,
  FC,
  useId,
  useState,
} from "react";

import classes from "./UIImageInput.module.css";
import Crop from "./Crop";
import classNames from "classnames";
import { Add } from "./Add";
import { Typography } from "$components";
import Grid from "../Grid";
import { theme } from "$theme";
import Flex from "../Flex/Flex.tsx";

interface IProps extends Omit<ComponentProps<"input">, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const VALID_EXTENSIONS = [".jpg", ".jpeg"];
const VALID_MIME_TYPES = ["image/jpeg"];

const UIImageInput: FC<IProps> = (props) => {
  const id = useId();
  const { value, onChange, title, ...restProps } = props;

  const [selected, setSelected] = useState<File | undefined>();
  const [cropping, setCropping] = useState(false);
  const [fileError, setFileEror] = useState("");

  const uploadImage = async (value: Blob): Promise<string> => {
    if (!selected) {
      return "";
    }

    const formData = new FormData();

    formData.append("file", value, selected.name);

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
    if (imageFile.size > 2097152) {
      setFileEror("Вес изображения слишком большой");
      return;
    }
    const fileExtension = imageFile.name.split(".").pop()?.toLowerCase();
    if (
      !VALID_MIME_TYPES.includes(imageFile.type) ||
      !VALID_EXTENSIONS.includes(`.${fileExtension}`)
    ) {
      setFileEror("Выберите формат .jpg,.jpeg");
      return;
    }

    setFileEror("");

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

  const error = fileError ?? restProps.error;

  const imageClasses = classNames(classes.image, {
    [classes.error]: error,
  });

  return (
    <Flex gap={5} justifyItems="center">
      <label className={classes.label} htmlFor={id}>
        {isNil(value) ? (
          <Add />
        ) : (
          <img src={value} className={imageClasses} alt="" />
        )}
      </label>
      <input
        id={id}
        type="file"
        accept=".jpg, .jpeg"
        onChange={handleChange}
        className={classes.imageInput}
        {...restProps}
      />
      <Grid gap={2}>
        {title && (
          <Typography
            size="14/14"
            color={theme.colors.general600}
            fontWeight={600}
            textTransform="uppercase"
          >
            {title}
          </Typography>
        )}
        {error && (
          <Typography size="12/12" color={theme.colors.red500}>
            {error}
          </Typography>
        )}
      </Grid>
      {cropping && selected && (
        <Crop file={selected} onChange={handleSubmit} onCancel={onCancel} />
      )}
    </Flex>
  );
};

export default UIImageInput;
