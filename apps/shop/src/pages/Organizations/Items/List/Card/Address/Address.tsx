import { useOrganization } from "../context.ts";
import { Typography } from "@book-eat/ui";

export const Address = () => {
  const { legalInfo } = useOrganization();
  return <Typography size="14/14">{legalInfo.actualAddress}</Typography>;
};
