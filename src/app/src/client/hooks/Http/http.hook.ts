import IRequest from './interfaces/Request.interface';
import IHttp from './interfaces/http.interface';

const defaultHeaders = {
  'Content-Type': 'application/json'
};

const areParamsValid = ({ body, method }: IRequest) => !(body.length > 0 && method !== 'POST');

export default function useHttp(): IHttp {
  const request = async ({
						   url,
						   body = null,
						   headers = defaultHeaders,
						   method = 'GET'
						 }: IRequest): Promise<any> => {
	if (
	  body
	  && !areParamsValid({
		url,
		body,
		method
	  })
	) {
	  return { message: 'Incorrect input variables' };
	}

	return fetch(url, {
	  method,
	  headers,
	  body
	})
	  .then((res) => res.json())
	  .then((res) => {
		const { error } = res;

		if (error) {
		  throw new Error(error);
		}

		return res;
	  });
  };

  return { request };
}
