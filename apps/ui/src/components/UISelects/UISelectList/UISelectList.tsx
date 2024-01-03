import {FC, ReactNode} from "react";
import UIGrid from "../../UIGrid";

interface IProps {
  children:ReactNode
}

const UISelectList: FC<IProps> = (props) => {
  const { children } = props;
  return <UIGrid gap="30px">{children}</UIGrid>;
};

export default UISelectList
