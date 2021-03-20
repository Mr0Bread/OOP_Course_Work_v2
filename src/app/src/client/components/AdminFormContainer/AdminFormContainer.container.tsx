import AdminFormContainerComponent from 'Component/AdminFormContainer/AdminFormContainer.component';
import ContainerPropsInterface from 'Component/AdminFormContainer/interfaces/containerProps.interface';
import React, { useState } from 'react';
import RowInterface from 'Component/Grid/interfaces/row.interface';
import useRequests from 'Hooks/Requests';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';
import { useRouter } from 'next/router';

export default function AdminFormContainer(props: ContainerPropsInterface) {
	const {
		children,
		initialFormData,
		submitHref,
		redirectOnError = '',
		redirectOnSuccess
	} = props;
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState<RowInterface>(initialFormData);
	const { fetchPost } = useRequests();
	const router = useRouter();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: {
				value,
				name
			}
		} = e;

		setFormData(prevState => Object.assign(prevState, { [name]: value }));
	};

	const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setIsLoading(true);

		fetchPost<BasicResponseInterface>(
			submitHref,
			JSON.stringify(formData)
		)
			.then(
				(res) => {
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

						if (redirectOnError) {
							router.push(redirectOnError);
						}

						return;
					}

					setIsLoading(false);

					router.push(redirectOnSuccess);
				},
				(err) => {
					console.log(err);
					setIsLoading(false);
				}
			);
	};

	return (
		<AdminFormContainerComponent
			onChange={ onChange }
			onSubmit={ onSubmit }
			isLoading={ isLoading }
			setIsLoading={ setIsLoading }
			initialFormData={ initialFormData }
		>
			{ children }
		</AdminFormContainerComponent>
	);
};
