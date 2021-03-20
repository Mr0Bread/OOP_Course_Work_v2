import EditAuthorComponent from 'Component/Admin/EditAuthor/EditAuthor.component';
import { useEffect, useState } from 'react';
import AuthorInterface from 'Server/modules/author/interfaces/author.interface';
import useRequests from 'Hooks/Requests';
import { useRouter } from 'next/router';
import ContainerPropsInterface from 'Component/Admin/EditAuthor/interfaces/containerProps.interface';
import useFunctions from 'Hooks/Functions';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';
import ADMIN_ROUTES from 'Server/constants/routes';
import Loader from 'Component/Loader';
import AdminFormContainer from 'Component/AdminFormContainer';

export default function EditAuthor(props: ContainerPropsInterface) {
	const { id } = props;
	const [isLoading, setIsLoading] = useState(true);
	const [initialFormData, setInitialFormData] = useState<AuthorInterface>({
		id: 0,
		epoch_id: 0,
		placeOfDeath: '',
		placeOfBirth: '',
		yearOfDeath: 0,
		yearOfBirth: 0,
		middlename: '',
		surname: '',
		name: ''
	});
	const { fetchGet } = useRequests();
	const router = useRouter();
	const { immediatelyInvoke } = useFunctions();

	const fetchAuthorData = async () => {
		try {
			const response = await fetchGet<AuthorInterface | BasicResponseInterface>(
				`/author/getOne?id=${ id }`
			);

			const {
				statusCode,
				message
			} = response as BasicResponseInterface;

			if (statusCode === HttpStatus.FORBIDDEN) {
				router.push(ADMIN_ROUTES.SIGN_IN);
				return;
			}

			if (statusCode === HttpStatus.BAD_REQUEST) {
				console.log(message);
				return;
			}

			setInitialFormData(response as AuthorInterface);
			setIsLoading(false);
		} catch (e) {
			console.log(e);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		immediatelyInvoke(
			fetchAuthorData
		);
	}, []);

	if (isLoading) {
		const loaderWrapperClasses = [
			'w-full',
			'min-h-screen',
			'flex',
			'justify-center',
			'items-center'
		];

		return (
			<div className={ loaderWrapperClasses.join(' ') }>
				<Loader />
			</div>
		);
	}

	return (
		<AdminFormContainer
			initialFormData={ initialFormData }
			redirectOnSuccess='/admin/authors'
			submitHref='/author/updateOne'
		>
			<EditAuthorComponent />
		</AdminFormContainer>
	);
}
