import AddAuthorComponent from 'Component/AddAuthor/AddAuthor.component';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthorInterface from 'Server/modules/author/interfaces/author.interface';
import useRequests from 'Hooks/Requests';
import { SelectOption } from 'Component/Field/interfaces/containerProps.interface';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';

export default function AddAuthor() {
	const [isLoading, setIsLoading] = useState(false);
	const [authorData, setAuthorData] = useState<AuthorInterface>({
		id: 0,
		placeOfDeath: '',
		placeOfBirth: '',
		yearOfDeath: 0,
		yearOfBirth: 0,
		middlename: '',
		surname: '',
		name: '',
		epoch_id: 0
	});
	const [epochSelectOptions, setEpochSelectOptions] = useState<SelectOption[]>([]);
	const router = useRouter();
	const { fetchPost, fetchGet } = useRequests();

	useEffect(() => {
		setIsLoading(true);

		fetchGet<EpochInterface[]>(
			'/epoch/getAll'
		)
			.then(
				(epochs) => {
					setIsLoading(false);

					setEpochSelectOptions(
						epochs.map(
							(epoch) => {
								const {
									id,
									label
								} = epoch;

								return {
									value: id,
									label
								};
							}
						)
					);
				},
				(err) => {

				}
			);
	}, []);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: {
				name,
				value
			}
		} = e;

		setAuthorData((prevState) => Object.assign(prevState, { [name]: value }));
	};

	const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true);
		e.preventDefault();

		fetchPost<{ message: string; statusCode: number }>(
			'/author/createOne',
			JSON.stringify(authorData)
		)
			.then(
				(res) => {
					setIsLoading(false);
					const { message, statusCode } = res;

					if (statusCode && statusCode === 403) {
						console.log(message);
						router.push('/admin/signin');
						return;
					}

					if (statusCode && statusCode === 400) {
						console.log(message);
						return;
					}

					router.push('/admin/authors');
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
		epochSelectOptions
	};

	return (
		<AddAuthorComponent
			{ ...containerProps }
			{ ...containerFunctions }
		/>
	);
};
