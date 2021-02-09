import { AxiosError } from "axios";

export enum RequestState {
  None = "None",
  Loading = "Loading",
  Ready = "Ready",
  Failure = "Failure"
}

export interface ClientError {
  message: string;
  error: unknown;
}

export type ResponseError = AxiosError | ClientError;
