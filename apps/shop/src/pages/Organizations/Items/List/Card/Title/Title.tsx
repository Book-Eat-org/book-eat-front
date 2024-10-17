import { useOrganization } from "../context.ts";
import { Typography } from "@book-eat/ui";

export const Title = () => {
  const { title } = useOrganization();
  return (
    <Typography size="18/18" fontWeight={700}>
      {title}
    </Typography>
  );
};
