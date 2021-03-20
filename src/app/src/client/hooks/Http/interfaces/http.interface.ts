import IRequest from './Request.interface';

export default interface IHttp {
  request: (request: IRequest) => Promise<any>
}
