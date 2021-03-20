import ContainerPropsInterface from 'Component/Admin/AuthorForm/interfaces/containerProps.interface';
import AuthorFormComponent from 'Component/Admin/AuthorForm/AuthorForm.component';
import { useEffect, useState } from 'react';
import { SelectOption } from 'Component/Field/interfaces/containerProps.interface';
import { useRouter } from 'next/router';
import useRequests from 'Hooks/Requests';
import useFunctions from 'Hooks/Functions';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';
import ADMIN_ROUTES from 'Server/constants/routes';
import Loader from 'Component/Loader';

export default function AuthorForm(props: ContainerPropsInterface) {
	const [isLoading, setIsLoading] = useState(true);
	const [epochSelectOptions, setEpochSelectOptions] = useState<SelectOption[]>([]);
	const router = useRouter();
	const { fetchGet } = useRequests();
	const { immediatelyInvoke } = useFunctions();

	const epochToSelectOption = (epoch: EpochInterface): SelectOption => ({
		value: epoch.id,
		label: epoch.label
	});

	const fetchEpochOptions = async () => {
		try {
			const response = await fetchGet<EpochInterface[] | BasicResponseInterface>(
				'/epoch/getAll'
			);

			const {
				message,
				statusCode
			} = response as BasicResponseInterface;

			if (statusCode === HttpStatus.FORBIDDEN) {
				router.push(ADMIN_ROUTES.SIGN_IN);
				return;
			}

			if (statusCode === HttpStatus.BAD_REQUEST) {
				console.log(message);
				return;
			}

			setEpochSelectOptions(
				(response as EpochInterface[])
					.map(
						epochToSelectOption
					)
			);
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		immediatelyInvoke(
			fetchEpochOptions
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
		<AuthorFormComponent
			{ ...props }
			epochSelectOptions={ epochSelectOptions }
		/>
	);
}

