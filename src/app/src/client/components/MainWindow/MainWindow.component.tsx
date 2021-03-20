import ComponentPropsInterface from 'Component/MainWindow/interfaces/componentProps.interface';

export default function MainWindowComponent(props: ComponentPropsInterface) {
  const { children } = props;
  const mainWindowClasses = [
    'ml-32',
	'w-full',
	'bg-blue-50'
  ];

  return (
	<div className={ mainWindowClasses.join(' ') }>
	  { children }
	</div>
  );
};
