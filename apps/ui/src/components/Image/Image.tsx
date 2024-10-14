import { FC, ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 400 | 800 | 1200;
}

const Image: FC<IProps> = (props) => {
  const { size, src, ...rest } = props;

  return <img src={src + `?resolution=${size}`} {...rest} />;
};

export default Image;
