import Link from 'next/link';
import Form from 'Component/Form';
import Field from 'Component/Field';
import { ChildrenComponentProps } from 'Component/AdminFormContainer/interfaces/componentProps.interface';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';

export default function EpochFormComponent(props) {
	const {
		isLoading,
		onSubmit,
		onChange,
		initialFormData
	} = props as ChildrenComponentProps;

	const {
		image,
		description,
		label
	} = initialFormData as EpochInterface;

	const addEpochClasses = [
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

	const fieldClasses = [
		'text-xl',
		'rounded'
	];

	return (
		<div className={ addEpochClasses.join(' ') }>
			<div className='form-wrapper'>
				<Link href='/admin/epochs'>
					<a>
						Go Back
					</a>
				</Link>
				<Form onSubmit={ onSubmit }>
					<Field
						onChange={ onChange }
						type='text'
						id='label'
						name='label'
						placeholder='Label'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						required
						initialValue={ label }
					/>
					<Field
						onChange={ onChange }
						type='text'
						id='description'
						name='description'
						placeholder='Description'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						initialValue={ description }
					/>
					<Field
						onChange={ onChange }
						type='text'
						id='image'
						name='image'
						placeholder='Image'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						initialValue={ image }
					/>
					<Field
						onChange={ () => null }
						type='submit'
						id='submit'
						name='submit'
						renderInSubmit='Save'
						disabled={ isLoading }
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName='rounded bg-blue-400 p-2'
					/>
				</Form>
			</div>
		</div>
	);
}
