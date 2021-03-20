import Head from 'next/head';
import ComponentPropsInterface from './interfaces/componentProps.interface';
import MainMenu from 'Component/MainMenu';
import MainWindow from 'Component/MainWindow';

export default function MainLayoutComponent(props: ComponentPropsInterface) {
  const { children, title = '' } = props;

  const mainLayoutClasses = [
    'min-h-screen',
	'flex'
  ];

  return (
	<>
	  <Head>
		<title>
		  Museum Panel
		  { title ? ` - ${ title }` : null }
		</title>
	  </Head>
	  <div className={ mainLayoutClasses.join(' ') }>
		<MainMenu />
		<MainWindow>
		  { children }
		</MainWindow>
	  </div>
	</>
  );
}
