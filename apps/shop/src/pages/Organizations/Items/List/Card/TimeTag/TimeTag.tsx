import classes from "./TimeTag.module.css";
import { Box, Typography } from "@book-eat/ui";

const TimeTag = () => (
  <Box p={1} className={classes.wrapper}>
    <Typography size="12/14">Открыто до 21:00</Typography>
  </Box>
);
export default TimeTag;
