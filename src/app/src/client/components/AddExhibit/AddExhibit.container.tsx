import AddExhibitComponent from 'Component/AddExhibit/AddExhibit.component';
import React, { useEffect, useState } from 'react';
import ExhibitInterface from '../../../server/modules/exhibit/interfaces/exhibit.interface';
import useRequests from 'Hooks/Requests';
import { useRouter } from 'next/router';
import TypeInterface from '../../../server/modules/type/interfaces/type.interface';
import { SelectOption } from 'Component/Field/interfaces/containerProps.interface';

export default function AddExhibit() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const [exhibitData, setExhibitData] = useState<ExhibitInterface>(
		{
			description: '',
			id: 0,
			image: '',
			name: '',
			sku: '',
			type_id: 0
		});
	const [types, setTypes] = useState<SelectOption[]>([]);
	const { fetchPost, fetchGet } = useRequests();

	useEffect(() => {
		fetchGet<TypeInterface[] | { message: string; statusCode: string }>(
			'/type/getAll'
		)
			.then(
				(res) => {
					if (Array.isArray(res)) {
						setExhibitData(
							(prevState) => Object.assign(prevState, { type_id: res[0].id })
						);
						setTypes(
							res.map(
								(type) => ({ value: type.id, label: type.label })
							)
						);
					}
				}
			);
	}, []);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: {
				value,
				name
			}
		} = e;

		setExhibitData(
			(prevState) => Object.assign(prevState, { [name]: value })
		);
	};

	const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true);
		e.preventDefault();
		fetchPost(
			'/exhibit/createOne',
			JSON.stringify(exhibitData)
		)
			.then(
				(res: { message: string; statusCode: number }) => {
					setIsLoading(false);
					const { statusCode, message } = res;

					if (statusCode && statusCode === 403) {
						console.log(message);
						router.push('/admin/signin');
						return;
					}

					if (statusCode && statusCode === 400) {
						console.log(message);
						return;
					}

					router.push('/admin/exhibits');
				},
				(err) => {
					console.log(err);
					setIsLoading(false);
				}
			);
	};

	const containerFunctions = {
		onChange,
		onSubmit
	};

	const containerProps = {
		isLoading,
		types
	};

	return (
		<AddExhibitComponent
			{ ...containerFunctions }
			{ ...containerProps }
		/>
	);
}
