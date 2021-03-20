import { useState } from 'react';
import ColumnInterface from 'Component/Grid/interfaces/column.interface';
import { useGridBuilder } from 'Hooks/Builder';
import useRequests from 'Hooks/Requests';
import { useRouter } from 'next/router';
import GridWrapperComponent from 'Component/GridWrapper/GridWrapper.component';
import RowInterface from 'Component/Grid/interfaces/row.interface';
import ContainerPropsInterface from 'Component/GridWrapper/interfaces/containerProps.interface';

export default function GridWrapper(props: ContainerPropsInterface) {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<RowInterface[]>([]);
  const [columns, setColumns] = useState<ColumnInterface[]>([]);
  const { getColumns } = useGridBuilder();
  const { fetchPost, fetchGet } = useRequests();
  const router = useRouter();

  const { children, ...restProps } = props;

  const containerProps = {
    isLoading,
	rows,
	columns,
	router
  };

  const containerFunctions = {
    setIsLoading,
	setRows,
	setColumns,
	getColumns,
	fetchGet,
	fetchPost
  };

  return (
    <GridWrapperComponent
	  { ...containerFunctions }
	  { ...containerProps }
	  { ...restProps }
	>
	  { children }
	</GridWrapperComponent>
  );
};
