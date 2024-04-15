import { Flex, Grid, Typography } from "@book-eat/ui";
import classes from "./PageHeader.module.css";
import { organizationsEndpoints } from "$api";
import { useParams } from "react-router-dom";

const PageHeader = () => {
  const { id } = useParams();
  const { data } = organizationsEndpoints.useGetOrganisationQuery();

  const item = data?.entities[id!];

  return (
    <Flex p={4} gap={2} alignItems="center">
      <img
        src={item?.logoUrl}
        alt=""
        width={80}
        height={80}
        className={classes.image}
      />
      <Grid>
        <Typography className={classes.header} size="26/32">
          Сеть ресторанов
        </Typography>
        <Typography className={classes.title} size="26/32">
          {item?.title}
        </Typography>
      </Grid>
    </Flex>
  );
};

export default PageHeader;
