import ComponentPropsInterface from 'Component/ClickOutside/interfaces/componentProps.interface';

export default function ClickOutsideComponent(props: ComponentPropsInterface) {
  const {
    onClick,
	children
  } = props;

	return (
	  <div>
		{ children }
	  </div>
	);
}
