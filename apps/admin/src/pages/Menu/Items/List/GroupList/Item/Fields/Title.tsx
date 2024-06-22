import { useMenuData } from "../context.ts";
import { Typography } from "@book-eat/ui";

export const Title = () => {
  const { title } = useMenuData();

  return (
    <Typography size="14/14" fontWeight={600}>
      {title}
    </Typography>
  );
};
