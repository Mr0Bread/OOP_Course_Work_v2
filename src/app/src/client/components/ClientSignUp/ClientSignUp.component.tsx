import MainLayout from 'Layout/client/MainLayout';
import ContentWrapper from 'Component/ContentWrapper';
import Form from 'Component/Form';
import Field from 'Component/Field';
import ComponentPropsInterface from 'Component/ClientSignUp/interfaces/componentProps.interface';
import styles from './ClientSignUp.module.scss';
import { CUSTOMER_PASSWORD_REGEXP_PATTERN } from 'Server/modules/auth/config';

export default function ClientSignUpComponent(props: ComponentPropsInterface) {
  const {
	isLoading,
	onChange,
	onSubmit
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
	<MainLayout>
	  <div className={ styles.Page }>
		<ContentWrapper>
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
				pattern={ CUSTOMER_PASSWORD_REGEXP_PATTERN }
			  />
			  <Field
				onChange={ onChange }
				type='password'
				id='password2'
				name='password2'
				placeholder='Repeat password'
				wrapperClassName={ wrapperClasses.join(' ') }
				fieldClassName={ fieldClasses.join(' ') }
				required
				pattern={ CUSTOMER_PASSWORD_REGEXP_PATTERN }
			  />
			  <Field
				onChange={ () => null }
				type='submit'
				id='submit'
				name='submit'
				renderInSubmit='Sign Up'
				disabled={ isLoading }
				wrapperClassName={ wrapperClasses.join(' ') }
				fieldClassName='bg-primary-black text-primary-white rounded text-xl p-2'
			  />
			</Form>
		  </div>
		</ContentWrapper>
	  </div>
	</MainLayout>
  );
}
