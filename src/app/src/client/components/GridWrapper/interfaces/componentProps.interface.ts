import RowInterface from 'Component/Grid/interfaces/row.interface';
import ColumnInterface from 'Component/Grid/interfaces/column.interface';
import { NextRouter } from 'next/router';
import { FetchGet, FetchPost } from 'Hooks/Requests/Requests.hook';
import ContainerPropsInterface from 'Component/GridWrapper/interfaces/containerProps.interface';

export default interface ComponentPropsInterface extends ContainerPropsInterface {
  isLoading: boolean;
  setIsLoading: (any) => any;
  rows: RowInterface[];
  setRows: (any) => any;
  columns: ColumnInterface[];
  setColumns: (any) => any;
  getColumns: (row: RowInterface) => ColumnInterface[];
  router: NextRouter;
  fetchPost: FetchPost;
  fetchGet: FetchGet;
}
