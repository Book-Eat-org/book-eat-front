import { useEffect, useRef, useState } from "react";
import { useWatch } from "react-hook-form";
import { IFormValues } from "../models.ts";

const FIVE_MINUTES = 5 * 60; // 300 секунд

export function useTimeRemaining() {
  const [secondsLeft, setSecondsLeft] = useState(FIVE_MINUTES);
  const timerRef = useRef<number | null>(null);
  const { takeUpTime } = useWatch<IFormValues>();

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    setSecondsLeft(FIVE_MINUTES);

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current ?? undefined);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current ?? undefined);
  }, [takeUpTime]);

  const minutes = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  return {
    secondsLeft,
    formatted: `${minutes}:${seconds}`,
    isFinished: secondsLeft === 0,
  };
}
