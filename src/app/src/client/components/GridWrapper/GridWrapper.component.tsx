import ComponentPropsInterface from 'Component/GridWrapper/interfaces/componentProps.interface';
import React from 'react';

export const defaultClasses = 'flex justify-center flex-col mx-12';

export default function GridWrapperComponent(props: ComponentPropsInterface) {
  const {
	children,
	className = defaultClasses,
	...restProps
  } = props;

  return (
	<div className={ className }>
	  { React.cloneElement(
		children,
		restProps
	  ) }
	</div>
  );
}
