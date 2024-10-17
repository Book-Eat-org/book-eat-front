import { theme, Grid, Typography } from "@book-eat/ui";
import classes from "./PageHeader.module.css";
import { useParams } from "react-router-dom";
import { organizationsEndpoints } from "@book-eat/api";

const PageHeader = () => {
  const { id } = useParams();
  const { data } = organizationsEndpoints.useGetOrganisationsQuery();

  const item = data?.entities[id!];

  return (
    <Grid gap={1} alignItems="center" justifyItems="center">
      <img
        src={item?.logoUrl}
        alt=""
        width={80}
        height={80}
        className={classes.image}
      />
      <Typography size="18/18" color={theme.colors.accent50} fontWeight={700}>
        Сеть ресторанов
      </Typography>
      <Typography size="26/26" color={theme.colors.general50} fontWeight={700}>
        {item?.title}
      </Typography>
    </Grid>
  );
};

export default PageHeader;
