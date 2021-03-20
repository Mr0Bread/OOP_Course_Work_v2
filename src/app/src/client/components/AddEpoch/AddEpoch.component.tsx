import ComponentPropsInterface from 'Component/AddEpoch/interfaces/componentProps.interface';
import Field from 'Component/Field';
import Form from 'Component/Form';
import Link from 'next/link';
import MainLayout from 'Layout/admin/MainLayout';

export default function AddEpochComponent(props: ComponentPropsInterface) {
	const {
		isLoading,
		onSubmit,
		onChange
	} = props;

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
		<MainLayout>
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
						/>
						<Field
							onChange={ onChange }
							type='text'
							id='description'
							name='description'
							placeholder='Description'
							wrapperClassName={ fieldWrapperClasses.join(' ') }
							fieldClassName={ fieldClasses.join(' ') }
						/>
						<Field
							onChange={ onChange }
							type='text'
							id='image'
							name='image'
							placeholder='Image'
							wrapperClassName={ fieldWrapperClasses.join(' ') }
							fieldClassName={ fieldClasses.join(' ') }
						/>
						<Field
							onChange={ () => null }
							type='submit'
							id='submit'
							name='submit'
							renderInSubmit='Add Epoch'
							disabled={ isLoading }
							wrapperClassName={ fieldWrapperClasses.join(' ') }
							fieldClassName='rounded bg-blue-400 p-2'
						/>
					</Form>
				</div>
			</div>
		</MainLayout>
	);
};
