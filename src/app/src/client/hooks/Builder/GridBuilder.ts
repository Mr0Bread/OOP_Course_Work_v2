import ColumnInterface from 'Component/Grid/interfaces/column.interface';
import RowInterface from 'Component/Grid/interfaces/row.interface';

export default function useGridBuilder() {
  const getColumns = (row: RowInterface): ColumnInterface[] => {
	return Object.keys(row).map(
	  (key) => ({ name: key })
	);
  }

  return {
    getColumns
  };
}
