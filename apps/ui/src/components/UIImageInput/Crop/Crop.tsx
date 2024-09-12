import UIGrid from "../../UIGrid";
import { FC, useEffect, useRef, useState } from "react";
import { ReactCropperElement, Cropper } from "react-cropper";
import UIButton from "../../UIButton";
import classes from "./Crop.module.css";
import "cropperjs/dist/cropper.css";

interface IProps {
  file: File;
  onChange: (blob: Blob) => void;
  onCancel: () => void;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Crop: FC<IProps> = (props) => {
  const { onChange, file, onCancel } = props;

  const url = URL.createObjectURL(file);

  const cropperRef = useRef<ReactCropperElement>(null);

  const size = useWindowDimensions();

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
          aspectRatio={1}
          guides={false}
          viewMode={3}
          ref={cropperRef}
          height={size.height - 400}
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
