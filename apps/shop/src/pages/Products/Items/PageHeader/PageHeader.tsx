import { theme, Grid, Typography } from "@book-eat/ui";
import classes from "./PageHeader.module.css";
import { useParams } from "react-router-dom";
import { placesEndpoints, organizationsEndpoints } from "@book-eat/api";
import { useEffect } from "react";
import { isNil } from "ramda";
import { organizationsSelectors } from "../../../../store/entities";
import { useSelector } from "$hooks";

const PageHeader = () => {
  const { id } = useParams();
  const { data } = placesEndpoints.useFetchPlacesQuery();

  const item = data?.entities[id!];
  const organizationId = item?.organizationId;

  const [triggerOrganization] =
    organizationsEndpoints.useLazyGetOrganisationQuery();
  const organization = useSelector((state) =>
    organizationsSelectors.selectById(state, organizationId),
  );

  useEffect(() => {
    if (isNil(organizationId)) {
      return;
    }
    triggerOrganization(organizationId);
  }, [organizationId]);

  return (
    <Grid gap={1} alignItems="center" justifyItems="center">
      <img
        src={organization?.logoUrl}
        alt=""
        width={80}
        height={80}
        className={classes.image}
      />
      <Typography size="18/18" color={theme.colors.accent50} fontWeight={700}>
        Меню
      </Typography>
      <Typography
        className={classes.title}
        size="26/26"
        fontWeight={700}
        color={theme.colors.general50}
      >
        {item?.title}
      </Typography>
    </Grid>
  );
};

export default PageHeader;
