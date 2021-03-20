import ColumnInterface from 'Component/Grid/interfaces/column.interface';
import RowInterface from 'Component/Grid/interfaces/row.interface';

export default interface ComponentPropsInterface {
  isLoading: boolean;
  columns: ColumnInterface[];
  rows: RowInterface[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}
