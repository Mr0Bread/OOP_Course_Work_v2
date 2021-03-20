import EpochsListComponent from 'Component/Client/EpochsList/EpochsList.component';
import { useEffect, useState } from 'react';
import useRequests from 'Hooks/Requests';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';

export default function EpochsList() {
	const [epochs, setEpochs] = useState<EpochInterface[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { fetchGet } = useRequests();

	useEffect(() => {
		fetchGet<EpochInterface[]>(
			'/epoch/getAll'
		)
			.then(
				(res) => {
					setIsLoading(false);
					setEpochs(res);
				},
				(err) => {
					console.log(err);
					setIsLoading(false);
				}
			);
	}, []);

	return (
		<EpochsListComponent
			isLoading={ isLoading }
			epochs={ epochs }
		/>
	);
};
