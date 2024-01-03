import UIGrid from "../../UIGrid";
import { FC, useRef } from "react";
import { ReactCropperElement, Cropper } from "react-cropper";
import UIButton from "../../UIButton";
import classes from "./Crop.module.css";
import "cropperjs/dist/cropper.css";

interface IProps {
  url: string;
  onChange: (url: string) => void;
  onCancel: () => void;
}

const Crop: FC<IProps> = (props) => {
  const { onChange, url, onCancel } = props;

  const cropperRef = useRef<ReactCropperElement>(null);

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    const URL = cropper?.getCroppedCanvas().toDataURL();

    if (URL) {
      onChange(URL);
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
