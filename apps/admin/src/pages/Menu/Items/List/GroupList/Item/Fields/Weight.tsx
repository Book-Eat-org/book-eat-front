import { useMenuData } from "../context.ts";
import { Typography } from "@book-eat/ui";

export const Weight = () => {
  const { weight } = useMenuData();

  const value = weight ? `${weight} г.` : "-";

  return <Typography size="14/14">{value}</Typography>;
};
