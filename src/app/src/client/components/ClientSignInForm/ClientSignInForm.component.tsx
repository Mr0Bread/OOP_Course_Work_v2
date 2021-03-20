import Form from 'Component/Form';
import Field from 'Component/Field';
import Link from 'next/link';
import ComponentPropsInterface from 'Component/ClientSignInForm/interfaces/componentProps.interface';

export default function ClientSignInFormComponent(props: ComponentPropsInterface) {
  const {
	onChange,
	onSubmit,
	isLoading
  } = props;

  const wrapperClasses = [
    'mt-6'
  ];

  const fieldClasses = [
    'rounded',
	'text-xl',
	'p-2'
  ];

  return (
	<div>
	  <Form onSubmit={ onSubmit }>
		<Field
		  onChange={ onChange }
		  type='text'
		  id='login'
		  name='login'
		  placeholder='Login'
		  wrapperClassName='pt-6'
		  fieldClassName={ fieldClasses.join(' ') }
		  required
		/>
		<Field
		  onChange={ onChange }
		  type='password'
		  id='password'
		  name='password'
		  placeholder='Password'
		  wrapperClassName={ wrapperClasses.join(' ') }
		  fieldClassName={ fieldClasses.join(' ') }
		  required
		/>
		<Field
		  onChange={ () => null }
		  type='submit'
		  id='submit'
		  name='submit'
		  renderInSubmit='Sign In'
		  disabled={ isLoading }
		  wrapperClassName={ wrapperClasses.join(' ') }
		  fieldClassName='rounded p-2 text-xl bg-primary-black text-primary-white'
		/>
	  </Form>
	  <div className='mt-6 w-max bg-primary-black rounded p-2 text-primary-white'>
		<Link href='signup'>
		  <a>
			Sign Up
		  </a>
		</Link>
	  </div>
	</div>
  );
};
