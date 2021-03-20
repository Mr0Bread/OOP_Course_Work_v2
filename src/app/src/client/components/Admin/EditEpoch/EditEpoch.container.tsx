import EditEpochComponent from 'Component/Admin/EditEpoch/EditEpoch.component';
import AdminFormContainer from 'Component/AdminFormContainer';
import { useEffect, useState } from 'react';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';
import useRequests from 'Hooks/Requests';
import { useRouter } from 'next/router';
import ContainerPropsInterface from 'Component/Admin/EditEpoch/interfaces/containerProps.interface';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';
import ADMIN_ROUTES from 'Server/constants/routes';
import Loader from 'Component/Loader';

export default function EditEpoch(props: ContainerPropsInterface) {
	const [isLoading, setIsLoading] = useState(true);
	const [initialFormData, setInitialFormData] = useState<EpochInterface>({
		id: 0,
		label: '',
		description: '',
		image: ''
	});
	const { fetchGet } = useRequests();
	const router = useRouter();
	const {
		id
	} = props;

	useEffect(() => {
		fetchGet<EpochInterface | BasicResponseInterface>(
			`/epoch/getOne?id=${ id }`
		)
			.then(
				(res) => {
					const {
						statusCode,
						message
					} = res as BasicResponseInterface;

					if (statusCode && statusCode === HttpStatus.FORBIDDEN) {
						router.push(ADMIN_ROUTES.SIGN_IN);
						return;
					}

					if (statusCode && statusCode === HttpStatus.BAD_REQUEST) {
						setIsLoading(false);
						console.log(message);
						return;
					}

					setInitialFormData(res as EpochInterface);
					setIsLoading(false);
				},
				(err) => {
					console.log(err);
					setIsLoading(false);
				}
			);
	}, []);

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	return (
		<AdminFormContainer
			initialFormData={ initialFormData }
			redirectOnSuccess='/admin/epochs'
			submitHref='/epoch/updateOne'
		>
			<EditEpochComponent />
		</AdminFormContainer>
	);
}
