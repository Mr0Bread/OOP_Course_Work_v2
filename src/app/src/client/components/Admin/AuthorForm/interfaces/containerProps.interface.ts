import React from 'react';

export default interface ContainerPropsInterface {
	isLoading: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
