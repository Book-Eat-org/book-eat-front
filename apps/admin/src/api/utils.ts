import { IErrorResponse, TFetchResponse } from "./models.ts";
import { isPlainObject } from "@reduxjs/toolkit";

export const checkIsErrorType = (
  data: TFetchResponse<unknown>,
): data is IErrorResponse => {
  if (!isPlainObject(data)) {
    return false;
  }

  return data.hasOwnProperty("code");
};
