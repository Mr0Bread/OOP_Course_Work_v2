import React, { useEffect, useState } from 'react';
import ContainerPropsInterface from 'Component/Admin/EditType/interfaces/containerProps.interface';
import TypeInterface from 'Server/modules/type/interfaces/type.interface';
import EditTypeComponent from 'Component/Admin/EditType/EditType.component';
import useRequests from 'Hooks/Requests';
import { useRouter } from 'next/router';
import AdminFormContainer from 'Component/AdminFormContainer';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';
import Loader from 'Component/Loader';
import ADMIN_ROUTES from 'Server/constants/routes';
import useFunctions from 'Hooks/Functions';

const EditType: React.FC<ContainerPropsInterface> = ({ id }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [initialFormData, setInitialFormData] = useState<TypeInterface>({
		label: '',
		id: 0
	});
	const { fetchGet } = useRequests();
	const router = useRouter();
	const { immediatelyInvoke } = useFunctions();

	const fetchTypeData = async () => {
		try {
			const response = await fetchGet<TypeInterface | BasicResponseInterface>(`/type/getOne?id=${ id }`);
			const {
				message,
				statusCode
			} = response as BasicResponseInterface;

			if (statusCode && statusCode === HttpStatus.FORBIDDEN) {
				router.push(ADMIN_ROUTES.SIGN_IN);
				return;
			}

			if (statusCode && statusCode === HttpStatus.BAD_REQUEST) {
				console.log(message);
				return;
			}

			setInitialFormData(response as TypeInterface);
			setIsLoading(false);
		} catch (e) {
			console.log(e);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		immediatelyInvoke(
			fetchTypeData
		);
	}, []);

	if (isLoading) {
		return (
			<div className='w-full min-h-screen flex justify-center items-center'>
				<Loader />
			</div>
		);
	}

	return (
		<AdminFormContainer
			initialFormData={ initialFormData }
			redirectOnSuccess='/admin/types'
			submitHref='/type/updateOne'
		>
			<EditTypeComponent />
		</AdminFormContainer>
	);
};

export default EditType;
