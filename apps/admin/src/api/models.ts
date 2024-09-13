export interface IErrorResponse {
  status: number;
  uuid: string;
  code: string;
  message: string;
  cause: null;
  supportMessage: null;
}

export type TFetchWrapperResponse<T> = {
  error?: IErrorResponse;
  data?: T;
};

export type TFetchResponse<T = undefined> = T | IErrorResponse;
