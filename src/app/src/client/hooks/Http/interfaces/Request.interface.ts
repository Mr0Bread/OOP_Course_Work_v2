import { methodType } from '../types';

export interface IHeaders {
  [key: string]: string
}

export default interface IRequest {
  url: string;
  method?: methodType;
  body?: string;
  headers?: IHeaders;
}
