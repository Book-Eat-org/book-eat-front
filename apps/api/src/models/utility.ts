export type Maybe<T> = T | null;

export type ApiDate = string;

export type PickPartial<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> &
  Partial<Pick<T, K>>;
