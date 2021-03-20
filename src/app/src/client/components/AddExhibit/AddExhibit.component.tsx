import Form from 'Component/Form';
import Field from 'Component/Field';
import MainLayout from 'Layout/admin/MainLayout';
import Link from 'next/link';
import styles from './AddExhibit.module.scss';
import ComponentPropsInterface from 'Component/AddExhibit/interfaces/componentProps.interface';

export default function AddExhibitComponent(props: ComponentPropsInterface) {
	const {
		onChange,
		onSubmit,
		isLoading,
		types
	} = props;

	const addExhibitClasses = [
		'flex',
		'justify-center',
		'items-center',
		'min-h-screen'
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
			<div className={ addExhibitClasses.join(' ') }>
				<div className={ styles.container }>
					<Link href='/admin/exhibits'>
						<a>Go Back</a>
					</Link>
					<Form onSubmit={ onSubmit }>
						<Field
							onChange={ onChange }
							id='type_id'
							type='select'
							name='type_id'
							placeholder='Type'
							wrapperClassName={ fieldWrapperClasses.join(' ') }
							fieldClassName={ fieldClasses.join(' ') }
							selectOptions={ types }
						/>
						<Field
							onChange={ onChange }
							id='sku'
							name='sku'
							type='text'
							placeholder='SKU'
							wrapperClassName={ fieldWrapperClasses.join(' ') }
							fieldClassName={ fieldClasses.join(' ') }
							required
						/>
						<Field
							onChange={ onChange }
							id='name'
							name='name'
							type='text'
							placeholder='Name'
							wrapperClassName={ fieldWrapperClasses.join(' ') }
							fieldClassName={ fieldClasses.join(' ') }
							required
						/>
						<Field
							onChange={ onChange }
							id='description'
							name='description'
							type='text'
							placeholder='Description'
							wrapperClassName={ fieldWrapperClasses.join(' ') }
							fieldClassName={ fieldClasses.join(' ') }
						/>
						<Field
							onChange={ onChange }
							id='image'
							name='image'
							type='text'
							placeholder='Image'
							wrapperClassName={ fieldWrapperClasses.join(' ') }
							fieldClassName={ fieldClasses.join(' ') }
						/>
						<Field
							onChange={ () => null }
							id='submit'
							name='submit'
							type='submit'
							renderInSubmit='Add new exhibit'
							fieldClassName='bg-blue-400 p-2 rounded'
							wrapperClassName={ fieldWrapperClasses.join(' ') }
							disabled={ isLoading }
						/>
					</Form>
				</div>
			</div>
		</MainLayout>
	);
};
