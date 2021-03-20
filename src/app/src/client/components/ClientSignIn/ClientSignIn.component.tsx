import ContentWrapper from 'Component/ContentWrapper';
import styles from './ClientSignIn.module.scss';
import ClientSignInForm from 'Component/ClientSignInForm';
import MainLayout from 'Layout/client/MainLayout';

export default function ClientSignInComponent() {
  return (
	<MainLayout>
	  <div className={ styles.Page }>
		<ContentWrapper>
		  <ClientSignInForm />
		</ContentWrapper>
	  </div>
	</MainLayout>
  );
}
