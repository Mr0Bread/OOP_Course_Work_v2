import ContainerPropsInterface from 'Component/Admin/EditExhibit/interfaces/containerProps.interface';
import React, { useEffect, useState } from 'react';
import EditExhibitComponent from 'Component/Admin/EditExhibit/EditExhibit.component';
import AdminFormContainer from 'Component/AdminFormContainer';
import ExhibitInterface from 'Server/modules/exhibit/interfaces/exhibit.interface';
import useRequests from 'Hooks/Requests';
import { useRouter } from 'next/router';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';
import Loader from 'Component/Loader';
import { SelectOption } from 'Component/Field/interfaces/containerProps.interface';
import TypeInterface from 'Server/modules/type/interfaces/type.interface';
import ADMIN_ROUTES from 'Server/constants/routes';

const EditExhibit: React.FC<ContainerPropsInterface> = ({ id }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [initialFormData, setInitialFormData] = useState<ExhibitInterface>({
		id: 0,
		type_id: 0,
		image: '',
		description: '',
		name: '',
		sku: ''
	});
	const [types, setTypes] = useState<SelectOption[]>([]);
	const { fetchGet } = useRequests();
	const router = useRouter();

	type fetchResponse = ExhibitInterface | BasicResponseInterface;

	const fetchAndProcessTypes = (exhibit: ExhibitInterface) => {
		fetchGet<TypeInterface[] | BasicResponseInterface>(
			'/type/getAll'
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
						console.log(message);
						return;
					}

					setTypes(
						(res as TypeInterface[]).map(
							(type) => ({ label: type.label, value: type.id })
						)
					);
					setInitialFormData(prevState => Object.assign(prevState, exhibit));
					setIsLoading(false);
				},
				(err) => {
					setIsLoading(false);
					console.log(err);
				}
			);
	};

	const handleLoadingOfInitialData = (res: fetchResponse) => {
		const {
			statusCode,
			message
		} = res as BasicResponseInterface;

		if (statusCode && statusCode === HttpStatus.FORBIDDEN) {
			router.push(ADMIN_ROUTES.SIGN_IN);
			return;
		}

		if (statusCode && statusCode === HttpStatus.BAD_REQUEST) {
			console.log(message);
			return;
		}

		fetchAndProcessTypes(res as ExhibitInterface);
	};

	useEffect(() => {
		fetchGet<fetchResponse>(
			`/exhibit/getOne?id=${ id }`
		)
			.then(
				(res) => {
					handleLoadingOfInitialData(res);
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

	const containerProps = {
		types
	};

	return (
		<AdminFormContainer
			initialFormData={ initialFormData }
			redirectOnSuccess='/admin/exhibits'
			submitHref='/exhibit/updateOne'
		>
			<EditExhibitComponent
				{ ...containerProps }
			/>
		</AdminFormContainer>
	);
};

export default EditExhibit;
