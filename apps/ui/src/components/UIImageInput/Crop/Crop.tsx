import UIGrid from "../../UIGrid";
import { FC, useRef } from "react";
import { ReactCropperElement, Cropper } from "react-cropper";
import UIButton from "../../UIButton";
import classes from "./Crop.module.css";
import "cropperjs/dist/cropper.css";

interface IProps {
  file: File;
  onChange: (blob: Blob) => void;
  onCancel: () => void;
}

const Crop: FC<IProps> = (props) => {
  const { onChange, file, onCancel } = props;

  const url = URL.createObjectURL(file);

  const cropperRef = useRef<ReactCropperElement>(null);

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    const dataURL = cropper
      ?.getCroppedCanvas({
        width: cropperRef?.current?.width ?? 0,
        height: cropperRef?.current?.height ?? 0,
      })
      .toDataURL("image/jpeg");

    if (dataURL) {
      fetch(dataURL)
        .then((res) => res.blob())
        .then(onChange);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Cropper
          src={url}
          initialAspectRatio={16 / 9}
          guides={false}
          style={{ maxHeight: "400px" }}
          viewMode={3}
          ref={cropperRef}
        />
        <UIGrid colSizes="1fr 1fr" gap="20px">
          <UIButton variant="secondary" onClick={onCancel}>
            Отменить
          </UIButton>
          <UIButton variant="primary" onClick={onCrop}>
            Сохранить
          </UIButton>
        </UIGrid>
      </div>
    </div>
  );
};
export default Crop;
