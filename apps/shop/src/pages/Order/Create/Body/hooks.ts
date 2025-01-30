import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import { IFormValues } from "../models.ts";
import { isNil, not } from "ramda";
import dayjs from "dayjs";

export const useTimeRemaining = () => {
  const [, setRerender] = useState(false);
  const { takeUpTime } = useWatch<IFormValues>();

  useEffect(() => {
    setInterval(() => setRerender(not), 1000);
  }, []);

  if (isNil(takeUpTime)) {
    return undefined;
  }

  const currentDate = dayjs();

  const timeLeftInMs = dayjs(takeUpTime).diff(currentDate, "seconds");

  if (timeLeftInMs < 0) {
    return [0, 0];
  }

  const minutes = Math.floor(timeLeftInMs / 60);
  const seconds = Math.floor(timeLeftInMs % 60);

  return [minutes, seconds];
};
