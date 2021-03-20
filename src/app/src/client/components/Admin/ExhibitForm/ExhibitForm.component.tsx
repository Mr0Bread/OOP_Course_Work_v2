import styles from 'Component/AddExhibit/AddExhibit.module.scss';
import Link from 'next/link';
import Form from 'Component/Form';
import Field from 'Component/Field';
import ExhibitInterface from 'Server/modules/exhibit/interfaces/exhibit.interface';

export default function ExhibitFormComponent(props) {
	const {
		onChange,
		onSubmit,
		isLoading,
		types,
		initialFormData,
		renderInSubmit
	} = props;

	const {
		sku,
		name,
		description,
		image,
		type_id
	} = initialFormData as ExhibitInterface;

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
						initialValue={ type_id }
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
						initialValue={ sku }
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
						initialValue={ name }
					/>
					<Field
						onChange={ onChange }
						id='description'
						name='description'
						type='text'
						placeholder='Description'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						initialValue={ description }
					/>
					<Field
						onChange={ onChange }
						id='image'
						name='image'
						type='text'
						placeholder='Image'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						initialValue={ image }
					/>
					<Field
						onChange={ () => null }
						id='submit'
						name='submit'
						type='submit'
						renderInSubmit={ renderInSubmit }
						fieldClassName='bg-blue-400 p-2 rounded'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						disabled={ isLoading }
					/>
				</Form>
			</div>
		</div>
	);
}
