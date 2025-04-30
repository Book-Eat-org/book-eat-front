import { isNil, isNotNil } from "ramda";
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
import Grid from "../Grid";
import Flex from "../Flex/Flex.tsx";
import { useGroupContext } from "./Group/context.ts";
import { Title } from "./Title";
import { Error } from "./Error/Error.tsx";
import { Group } from "./Group/Group.tsx";
import { Caption } from "./Caption";

interface IProps extends Omit<ComponentProps<"input">, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  caption?: string;
  error?: string;
}

interface INestedComponents {
  Group: typeof Group;
}

const VALID_EXTENSIONS = [".jpg", ".jpeg"];
const VALID_MIME_TYPES = ["image/jpeg"];

const UIImageInput: FC<IProps> & INestedComponents = (props) => {
  const id = useId();
  const { value, onChange, title, caption, ...restProps } = props;

  const [selected, setSelected] = useState<File | undefined>();
  const [cropping, setCropping] = useState(false);
  const [fileError, setFileError] = useState("");

  const { setError } = useGroupContext() ?? {};

  const isSingleItem = isNil(setError);
  console.log(isSingleItem, setError);
  const handleError = setError ?? setFileError;

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
    if (imageFile.size > 5242880) {
      handleError("Вес изображения слишком большой");
      return;
    }
    const fileExtension = imageFile.name.split(".").pop()?.toLowerCase();
    if (
      !VALID_MIME_TYPES.includes(imageFile.type) ||
      !VALID_EXTENSIONS.includes(`.${fileExtension}`)
    ) {
      handleError("Выберите формат .jpg,.jpeg");
      return;
    }

    handleError("");

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

  const error = isSingleItem ? fileError || restProps.error : "";
  console.log(error);

  const imageClasses = classNames(classes.image, {
    [classes.error]: Boolean(error),
  });

  return (
    <Flex gap={5} justifyItems="center">
      <Grid gap={1}>
        <label className={classes.label} htmlFor={id}>
          {isNil(value) ? (
            <Add />
          ) : (
            <img src={value} className={imageClasses} alt="" />
          )}
        </label>
        {caption && <Caption>{caption}</Caption>}
      </Grid>
      <input
        id={id}
        type="file"
        accept=".jpg, .jpeg"
        onChange={handleChange}
        className={classes.imageInput}
        {...restProps}
      />
      {isSingleItem && (
        <Grid gap={2}>
          {title && (
            <Title>Загрузите фото {title} в формате Jpg, до 5 MB</Title>
          )}
          {error && <Error>{error}</Error>}
        </Grid>
      )}
      {cropping && selected && (
        <Crop file={selected} onChange={handleSubmit} onCancel={onCancel} />
      )}
    </Flex>
  );
};

UIImageInput.Group = Group;

export default UIImageInput;
