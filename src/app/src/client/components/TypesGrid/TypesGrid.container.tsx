import GridWrapper from 'Component/GridWrapper';
import TypesGridComponent from 'Component/TypesGrid/TypesGrid.component';
import ComponentPropsInterface from 'Component/GridWrapper/interfaces/componentProps.interface';
import { useEffect } from 'react';
import TypeInterface from 'Server/modules/type/interfaces/type.interface';
import { fetchPost } from 'Hooks/Requests/Requests.hook';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';

function TypesGridContainer(props) {
	const {
		fetchGet,
		setIsLoading,
		setRows,
		getColumns,
		setColumns,
		isLoading,
		rows,
		columns,
		router
	} = (props as ComponentPropsInterface);

	const updateTypesGrid = () => {
		fetchGet<TypeInterface[]>(
			'/type/getAll'
		)
			.then(
				(types) => {
					setIsLoading(false);

					if (types.length === 0) {
						return;
					}

					setRows(types);
					setColumns(
						getColumns(types[0])
					);
				},
				(err) => {
					setIsLoading(false);
					console.log(err);
				}
			);
	};

	useEffect(() => {
		updateTypesGrid();
	}, []);

	const onDelete = (id: number) => {
		setIsLoading(true);

		fetchPost<BasicResponseInterface>(
			'/type/deleteOne',
			JSON.stringify({ id })
		)
			.then(
				(res) => {
					const {
						statusCode,
						message
					} = res;

					if (statusCode === HttpStatus.FORBIDDEN) {
						router.push('/admin/signin');
						return;
					}

					if (statusCode === HttpStatus.BAD_REQUEST) {
						console.log(message);
						return;
					}

					updateTypesGrid();
				},
				(err) => {
					setIsLoading(false);
					console.log(err);
				}
			);
	};

	const onEdit = (id: number) => {
		router.push(`/admin/types/edit/${ id }`)
	}

	const containerProps = {
		isLoading,
		rows,
		columns
	};

	const containerFunctions = {
		onDelete,
		onEdit
	};

	return (
		<TypesGridComponent
			{ ...containerProps }
			{ ...containerFunctions }
		/>
	);
}

export default function TypesGrid() {
	return (
		<GridWrapper>
			<TypesGridContainer />
		</GridWrapper>
	);
}
