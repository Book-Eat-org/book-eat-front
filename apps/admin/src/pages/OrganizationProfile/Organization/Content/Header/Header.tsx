import { UIImageInput } from "@book-eat/ui";
import { Image } from "./Image";
import { ChainLogo } from "./ChainLogo";

const Header = () => {
  return (
    <UIImageInput.Group title="сети и логотип">
      <Image />
      <ChainLogo />
    </UIImageInput.Group>
  );
};

export default Header;
