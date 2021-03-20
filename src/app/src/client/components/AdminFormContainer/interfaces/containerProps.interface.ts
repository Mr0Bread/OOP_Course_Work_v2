import RowInterface from 'Component/Grid/interfaces/row.interface';

export default interface ContainerPropsInterface {
  children: JSX.Element;
  initialFormData: RowInterface;
  submitHref: string;
  redirectOnError?: string;
  redirectOnSuccess: string;
  [key: string]: any;
}
