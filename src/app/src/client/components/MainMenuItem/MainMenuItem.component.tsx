import ComponentPropsInterface from 'Component/MainMenuItem/interfaces/componentProps.interface';
import Link from 'next/link';

export default function MainMenuItemComponent(props: ComponentPropsInterface) {
  const { to, children } = props;

  const menuItemClasses = [
    'mx-2',
	'px-4',
	'pt-2',
	'pb-2',
	'bg-blue-300',
	'rounded',
	'text-center',
	'mt-4',
	'hover:bg-blue-400'
  ];

  return (
	<Link href={ to }>
	  <a className={ menuItemClasses.join(' ') }>
		{ children }
	  </a>
	</Link>
  );
};
