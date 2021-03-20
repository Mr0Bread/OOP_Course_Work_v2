import ContentWrapper from 'Component/ContentWrapper';
import ExhibitsList from 'Component/ExhibitsList';
import styles from './ExhibitsClientPage.module.scss';
import MainLayout from 'Layout/client/MainLayout';

export default function ExhibitsClientPageComponent() {
  return (
	<MainLayout>
	  <div className={ styles.Page }>
		<ContentWrapper>
		  <ExhibitsList />
		</ContentWrapper>
	  </div>
	</MainLayout>
  );
}
