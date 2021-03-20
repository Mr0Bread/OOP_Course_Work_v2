import Link from 'next/link';
import Form from 'Component/Form';
import Field from 'Component/Field';
import AuthorInterface from 'Server/modules/author/interfaces/author.interface';

export default function AuthorFormComponent(props) {
	const {
		initialFormData,
		isLoading,
		onSubmit,
		onChange,
		epochSelectOptions
	} = props;

	const {
		name,
		surname,
		middlename,
		yearOfBirth,
		yearOfDeath,
		placeOfBirth,
		placeOfDeath,
		epoch_id
	} = initialFormData as AuthorInterface;

	const addAuthorClasses = [
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
		<div className={ addAuthorClasses.join(' ') }>
			<div className='form-wrapper'>
				<Link href='/admin/authors'>
					<a>
						Go Back
					</a>
				</Link>
				<Form onSubmit={ onSubmit } className='w-min'>
					<Field
						onChange={ onChange }
						type='text'
						id='name'
						name='name'
						placeholder='Name'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						required
						initialValue={ name }
					/>
					<Field
						onChange={ onChange }
						type='text'
						id='surname'
						name='surname'
						placeholder='Surname'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						required
						initialValue={ surname }
					/>
					<Field
						onChange={ onChange }
						type='text'
						id='middlename'
						name='middlename'
						placeholder='Middlename'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						initialValue={ middlename }
					/>
					<Field
						onChange={ onChange }
						type='text'
						id='yearOfBirth'
						name='yearOfBirth'
						placeholder='Year of birth'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						initialValue={ yearOfBirth }
					/>
					<Field
						onChange={ onChange }
						type='text'
						id='yearOfDeath'
						name='yearOfDeath'
						placeholder='Year of death'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						initialValue={ yearOfDeath }
					/>
					<Field
						onChange={ onChange }
						type='text'
						id='placeOfBirth'
						name='placeOfBirth'
						placeholder='Place of birth'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						initialValue={ placeOfBirth }
					/>
					<Field
						onChange={ onChange }
						type='text'
						id='placeOfDeath'
						name='placeOfDeath'
						placeholder='Place of death'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ fieldClasses.join(' ') }
						initialValue={ placeOfDeath }
					/>
					<Field
						onChange={ onChange }
						type='select'
						id='epoch_id'
						name='epoch_id'
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName={ [...fieldClasses, 'w-full'].join(' ') }
						selectOptions={ epochSelectOptions }
						initialValue={ epoch_id }
					/>
					<Field
						onChange={ () => null }
						type='submit'
						id='submit'
						name='submit'
						renderInSubmit='Save'
						disabled={ isLoading }
						wrapperClassName={ fieldWrapperClasses.join(' ') }
						fieldClassName='rounded bg-blue-400 p-2 text-xl'
					/>
				</Form>
			</div>
		</div>
	);
}
