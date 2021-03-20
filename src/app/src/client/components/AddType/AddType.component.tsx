import MainLayout from 'Layout/admin/MainLayout';
import Link from 'next/link';
import Form from 'Component/Form';
import ComponentPropsInterface from 'Component/AddType/interfaces/componentProps.interface';
import Field from 'Component/Field';

export default function AddTypeComponent(props: ComponentPropsInterface) {
	const {
		isLoading,
		onChange,
		onSubmit
	} = props;

	const addTypeClasses = [
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
			<div className={ addTypeClasses.join(' ') }>
				<div className='form-wrapper'>
					<Link href='/admin/types'>
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
							type='submit'
							id='submit'
							name='submit'
							renderInSubmit='Add Type'
							disabled={ isLoading }
							wrapperClassName={ fieldWrapperClasses.join(' ') }
							fieldClassName='rounded bg-blue-400 p-2'
						/>
					</Form>
				</div>
			</div>
		</MainLayout>
	);
}
