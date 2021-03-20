import GridWrapper from 'Component/GridWrapper';
import ComponentPropsInterface from 'Component/GridWrapper/interfaces/componentProps.interface';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';
import { useEffect } from 'react';
import EpochsGridComponent from 'Component/EpochsGrid/EpochsGrid.component';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';
import ADMIN_ROUTES from 'Server/constants/routes';

function EpochsGridContainer(props) {
	const {
		fetchGet,
		setIsLoading,
		setColumns,
		setRows,
		getColumns,
		isLoading,
		columns,
		rows,
		fetchPost,
		router
	} = (props as ComponentPropsInterface);

	const updateEpochsGrid = () => {
		fetchGet<EpochInterface[]>(
			'/epoch/getAll'
		)
			.then(
				(res) => {
					setIsLoading(false);

					if (res.length === 0) {
						return 0;
					}

					setRows(res);

					setColumns(
						getColumns(res[0])
					);
				},
				(err) => {
					setIsLoading(false);
					console.log(err);
				}
			);
	};

	useEffect(() => {
		updateEpochsGrid();
	}, []);

	const onDelete = (id: number) => {
		setIsLoading(true);

		fetchPost<BasicResponseInterface>(
			'/epoch/deleteOne',
			JSON.stringify({ id })
		)
			.then(
				(res) => {
					setIsLoading(false);

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

					updateEpochsGrid();
				},
				(err) => {
					setIsLoading(false);
					console.log(err);
				}
			);
	};

	const onEdit = (id: number) => {
		router.push(`${ ADMIN_ROUTES.EPOCHS }/edit/${ id }`);
		return;
	}

	return (
		<EpochsGridComponent
			isLoading={ isLoading }
			rows={ rows }
			columns={ columns }
			onDelete={ onDelete }
			onEdit={ onEdit }
		/>
	);
}

export default function EpochsGrid() {
	return (
		<GridWrapper>
			<EpochsGridContainer />
		</GridWrapper>
	);
}
