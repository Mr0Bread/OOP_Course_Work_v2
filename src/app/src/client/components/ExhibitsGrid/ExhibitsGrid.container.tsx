import ExhibitsGridComponent from 'Component/ExhibitsGrid/ExhibitsGrid.component';
import { useEffect, useState } from 'react';
import useRequests from 'Hooks/Requests';
import { useGridBuilder } from 'Hooks/Builder';
import ExhibitInterface from 'Server/modules/exhibit/interfaces/exhibit.interface';
import { useRouter } from 'next/router';
import TypeInterface from 'Server/modules/type/interfaces/type.interface';

export default function ExhibitsGrid() {
	const [isLoading, setIsLoading] = useState(true);
	const [exhibits, setExhibits] = useState<Array<ExhibitInterface>>([]);
	const [columns, setColumns] = useState<Array<{ name: string }>>([]);
	const { fetchGet, fetchPost } = useRequests();
	const { getColumns } = useGridBuilder();
	const router = useRouter();

	const updateExhibitsGrid = () => {
		fetchGet<ExhibitInterface[]>(
			'/exhibit/getAll'
		)
			.then(
				(resExhibits) => {
					setIsLoading(false);
					setExhibits(resExhibits);

					if (resExhibits.length === 0) {
						return;
					}

					fetchGet<TypeInterface[]>(
						'/type/getAll'
					)
						.then(
							(types) => {
								const typeMap = {};

								types.forEach(
									(type) => {
										typeMap[type.id] = type.label;
									}
								);

								resExhibits.forEach(
									(exhibit) => {
										exhibit['type'] = typeMap[exhibit.type_id];
										delete exhibit.type_id;
									}
								);

								setColumns(
									getColumns(resExhibits[0])
								);
							},
							(err) => {
								console.log(err);
							}
						);
				},
				(err) => {
					setIsLoading(false);
					console.log(err);
				}
			);
	};

	useEffect(() => {
		updateExhibitsGrid();
	}, []);

	const onDelete = (id: number) => {
		setIsLoading(true);
		fetchPost<{ message: string; statusCode: number }>(
			'/exhibit/deleteOne',
			JSON.stringify({ id })
		)
			.then(
				(res) => {
					setIsLoading(false);
					const { statusCode, message } = res;

					if (statusCode === 400) {
						console.log(message);
						return;
					}

					if (statusCode === 403) {
						router.push('/admin/signin');
						return;
					}

					updateExhibitsGrid();
				},
				(err) => {
					console.log(err);
				}
			);
	};

	const onEdit = (id: number) => {
		router.push(`/admin/exhibits/edit/${ id }`);
		return;
	}

	const containerProps = {
		isLoading,
		exhibits,
		columns
	};

	const containerFunctions = {
		onDelete,
		onEdit
	};

	return (
		<ExhibitsGridComponent
			{ ...containerProps }
			{ ...containerFunctions }
		/>
	);
}
