import TypeInterface from 'Server/modules/type/interfaces/type.interface';
import React from 'react';

export default interface ComponentPropsInterface {
	isLoading: boolean;
	initialFormData: TypeInterface;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
