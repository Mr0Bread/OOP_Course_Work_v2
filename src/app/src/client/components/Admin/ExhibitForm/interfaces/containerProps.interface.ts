import React from 'react';
import { SelectOption } from 'Component/Field/interfaces/containerProps.interface';

export default interface ContainerPropsInterface {
	isLoading: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
	types: SelectOption[];
	renderInSubmit: JSX.Element | JSX.Element[] | string;
}
