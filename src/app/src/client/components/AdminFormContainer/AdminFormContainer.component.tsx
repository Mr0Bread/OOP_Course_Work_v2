import ComponentPropsInterface from 'Component/AdminFormContainer/interfaces/componentProps.interface';
import React from 'react';

export default function AdminFormContainerComponent(props: ComponentPropsInterface) {
	const {
		children,
		...restProps
	} = props;

	return (
		<>
			{ React.cloneElement(children, { ...children.props, ...restProps }) }
		</>
	);
};
