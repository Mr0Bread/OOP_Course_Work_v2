import ComponentPropsInterface from 'Component/Dropdown/interfaces/componentProps.interface';

export default function DropdownComponent(props: ComponentPropsInterface) {
	const {
		onButtonClick,
		isExpanded,
		children
	} = props;

	return (
		<div>
			<button onClick={ onButtonClick }>
				Select
			</button>
			<div
				className={ `Content${ isExpanded ? '_isExpanded' : '' }` }
			>
				{ children }
			</div>
		</div>
	);
}
