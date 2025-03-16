import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context.ts";
import { navigateToPage, PageURLS } from "$constants";
import { formatPhoneNumber, formatSchedule } from "@book-eat/utils";
import { Grid, Flex, Typography, DownArrowIcon, PhoneIcon20, ClockIcon20, Box } from "@book-eat/ui";
import classes from "./Details.module.css"; 

export const Details: FC = () => {
  const data = useData();
  const navigate = useNavigate();
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const schedule = formatSchedule(data.schedule);

  const handleOpenClick = () => setIsOpenDetails((prev) => !prev);

  const onClick = () => {
    const url = navigateToPage(PageURLS.ORGANIZATION_LEGAL_INFO, { id: data.organizationId });
    navigate(url);
  };
  
  return (
    <Grid p="0 16px 0 10px">
      <Flex 
        p="6px 0 16px 0" 
        alignItems="center" 
        justifyContent="space-between" 
        onClick={handleOpenClick}
      >
        <Typography size="12/12" color="#6C6C6C">
          {'Подробнее'}
        </Typography>
        <DownArrowIcon 
          style={{
            transform: `rotate(${isOpenDetails ? 180 : 0}deg)`,
            transition: 'transform .2s ease'
          }} 
        />
      </Flex>
      <div className={`${classes.details} ${isOpenDetails ? classes.show : ''}`}>
        <Grid gap="5px" p="0 0 15px">
          <Flex alignItems="center" gap="3px">
            <Box p="4px">
              <PhoneIcon20 />
            </Box>
            <Typography size="12/12" color="#4C9240">
              {formatPhoneNumber(data.info.phone ?? '')}
            </Typography>
          </Flex>
          <Flex p="0 0 10px" alignItems="flex-start" gap="3px">
            <Box p="4px">
              <ClockIcon20 />
            </Box>
            <Flex p="6px 0 0" flexDirection="column" gap={1.5}>
              {schedule?.map((item, index) => (
                <Typography key={index} size="12/12">{item}</Typography>
              ))}
            </Flex>
          </Flex>
          <Box onClick={onClick}>
            <Typography size="12/12" color="#6C6C6C" textDecoration="underline">
              {'Юридическая информация'}
            </Typography>
          </Box>
        </Grid>
      </div>
    </Grid>
  )
}