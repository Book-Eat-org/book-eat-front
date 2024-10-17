import classes from "../Card.module.css";
import { useOrganization } from "../context.ts";
import { Image as UIImage } from "@book-eat/ui";

export const Image = () => {
  const { imageUrl } = useOrganization();
  return <UIImage size={800} className={classes.image} src={imageUrl} />;
};
