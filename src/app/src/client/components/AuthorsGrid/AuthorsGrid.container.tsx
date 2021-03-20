import AuthorsGridComponent from 'Component/AuthorsGrid/AuthorsGrid.component';
import { useEffect, useState } from 'react';
import AuthorInterface from 'Server/modules/author/interfaces/author.interface';
import useRequests from 'Hooks/Requests';
import { useGridBuilder } from 'Hooks/Builder';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';
import { useRouter } from 'next/router';

export default function AuthorsGrid() {
	const [isLoading, setIsLoading] = useState(true);
	const [authors, setAuthors] = useState<AuthorInterface[]>([]);
	const [columns, setColumns] = useState<Array<{ name: string }>>([]);
	const { fetchGet, fetchPost } = useRequests();
	const { getColumns } = useGridBuilder();
	const router = useRouter();

	const updateAuthorsGrid = () => {
		fetchGet<AuthorInterface[]>(
			'/author/getAll'
		)
			.then(
				(res) => {
					setIsLoading(false);
					setAuthors(res);

					if (res.length === 0) {
						return;
					}

					setColumns(
						getColumns(res[0])
					);
				},
				(err) => {
					console.log(err);
					setIsLoading(false);
				}
			);
	};

	useEffect(() => {
		updateAuthorsGrid();
	}, []);

	const onDelete = (id: number) => {
		setIsLoading(true);

		fetchPost<BasicResponseInterface>(
			'/author/deleteOne',
			JSON.stringify({ id })
		)
			.then(
				(res) => {
					setIsLoading(false);

					const {
						message,
						statusCode
					} = res;

					if (statusCode === HttpStatus.FORBIDDEN) {
						router.push('/admin/signin');
						return;
					}

					if (statusCode === HttpStatus.BAD_REQUEST) {
						console.log(message);
						return;
					}

					updateAuthorsGrid();
				},
				(err) => {
					console.log(err);
					setIsLoading(false);
				}
			);
	};

	const onEdit = (id) => {
		router.push(`/admin/authors/edit/${ id }`);
		return;
	}

	const containerProps = {
		isLoading,
		columns,
		authors
	};

	const containerFunctions = {
		onDelete,
		onEdit
	};

	return (
		<AuthorsGridComponent
			{ ...containerProps }
			{ ...containerFunctions }
		/>
	);
};
