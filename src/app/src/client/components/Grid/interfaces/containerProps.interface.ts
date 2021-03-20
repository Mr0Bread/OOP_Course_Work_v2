import ColumnInterface from 'Component/Grid/interfaces/column.interface';
import RowInterface from 'Component/Grid/interfaces/row.interface';

export default interface ContainerPropsInterface {
  columns: ColumnInterface[];
  rows: RowInterface[];
  doRenderActionColumn?: boolean;
  onDelete?: (id: number) => void;
  onEdit?: (id: number) => void;
}
