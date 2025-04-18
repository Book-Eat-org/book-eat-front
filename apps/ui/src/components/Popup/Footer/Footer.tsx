import { FC } from "react";
import { Button } from "$components";

interface IProps {
  title?: string;
  onClose: () => void;
}

const Footer: FC<IProps> = (props) => {
  const { 
    title = "Понятно", 
    onClose 
  } = props;

  return (
    <Button 
      style={{
        position: 'fixed',
        bottom: "44px",
        left: "15px",
        right: "15px"
      }}
      onClick={onClose}
    >
      {title}
    </Button>
  );
};

export default Footer;
