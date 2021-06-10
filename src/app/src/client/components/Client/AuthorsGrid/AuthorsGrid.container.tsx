import AuthorsGridComponent from 'Component/Client/AuthorsGrid/AuthorsGrid.component';
import { useEffect, useState } from 'react';
import useRequests from 'Hooks/Requests';
import AuthorInterface from 'Server/modules/author/interfaces/author.interface';
import useFunctions from 'Hooks/Functions';

export default function AuthorsGrid() {
	const { fetchGet } = useRequests();
	const [authors, setAuthors] = useState<AuthorInterface[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { immediatelyInvoke } = useFunctions();

	const prepareAuthors = async () => {
		const response = await fetchGet<AuthorInterface[]>(
			'/author/getAll'
		);

		setAuthors(response);
		setIsLoading(false);
	};

	useEffect(() => {
		immediatelyInvoke(prepareAuthors);
	}, []);

	return (
		<AuthorsGridComponent
			authors={ authors }
			isLoading={ isLoading }
		/>
	);
}
