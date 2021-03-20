import useHttp from '../Http';
import { IHeaders } from '../Http/interfaces/Request.interface';

const getRequest = () => {
    const { request } = useHttp();

    return request;
};

const buildUrl = (path: string) => `${ process.env.baseUrl }${ path }`;

export type FetchPost = <T>(path: string, body: string, headers?: IHeaders) => Promise<T>;

export type FetchGet = <T>(path: string, headers?: IHeaders) => Promise<T>;

export const fetchGet: FetchGet = async <T>(
  path: string,
  headers?: IHeaders
): Promise<T> => {
    const request = getRequest();
    const url = buildUrl(path);

    return request(
      {
          method: 'GET',
          url,
          headers
      }
    );
};

export const fetchPost: FetchPost = async <T>(
  path: string,
  body: string,
  headers?: IHeaders
): Promise<T> => {
    const request = getRequest();
    const url = buildUrl(path);

    return request(
      {
          method: 'POST',
          url,
          body,
          headers
      }
    );
};

const useRequests = () => ({ fetchGet, fetchPost});

export default useRequests;
