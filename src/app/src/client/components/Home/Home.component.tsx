import ContentWrapper from 'Component/ContentWrapper';
import styles from './Home.module.scss';
import HomeBlocks from 'Component/HomeBlocks';
import MainLayout from 'Layout/client/MainLayout';

export default function HomeComponent() {
  const homeClasses = [
    styles.Home,
	'bg-primary'
  ];

  return (
	<MainLayout>
	  <div className={ homeClasses.join(' ') }>
		<ContentWrapper>
		  <div className={ styles.WelcomeBlock }>
			Welcome to Museum of national art of Japan
		  </div>
		  <HomeBlocks />
		</ContentWrapper>
	  </div>
	</MainLayout>
  );
};
