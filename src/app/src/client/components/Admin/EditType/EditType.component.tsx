import React from 'react';
import Form from 'Component/Form';
import Field from 'Component/Field';
import Link from 'next/link';
import { ChildrenComponentProps } from 'Component/AdminFormContainer/interfaces/componentProps.interface';

const EditTypeComponent = (props) => {
	const {
		initialFormData,
		isLoading,
		onChange,
		onSubmit
	} = props as ChildrenComponentProps;

	const {
		label
	} = initialFormData;

	const editTypeClasses = [
		'flex',
		'min-h-screen',
		'w-full',
		'justify-center',
		'items-center',
		'flex-col'
	];

	const fieldWrapperClasses = [
		'mt-6'
	];

	return (
		<div className={ editTypeClasses.join(' ') }>
			<div className='form-wrapper'>
				<Link href='/admin/types'>
					<a>
						Go Back
					</a>
				</Link>
				<Form onSubmit={ onSubmit }>
					<Field
						onChange={ onChange }
						id='label'
						type='text'
						name='label'
						initialValue={ label }
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName='text-xl rounded pl-1'
					/>
					<Field
						onChange={ onChange }
						id='submit'
						type='submit'
						name='submit'
						renderInSubmit='Update Type'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName='rounded p-2 text-xl bg-blue-400'
						disabled={ isLoading }
					/>
				</Form>
			</div>
		</div>
	);
};

export default EditTypeComponent;
