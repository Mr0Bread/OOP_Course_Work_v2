import IProps from './interfaces/componentProps.interface';

export default function FieldComponent(props: IProps) {
	const {
		type,
		name,
		id,
		onChange,
		label,
		placeholder,
		maxLength,
		minLength,
		required,
		pattern,
		renderAfter,
		renderBefore,
		autocomplete = 'on',
		fieldClassName,
		wrapperClassName,
		labelClassName,
		disabled = false,
		renderInSubmit,
		selectOptions,
		initialValue = ''
	} = props;

	const renderInputField = () => (
		<>
			<input
				placeholder={ placeholder }
				type={ type }
				name={ name }
				id={ id }
				onChange={ onChange }
				maxLength={ maxLength }
				minLength={ minLength }
				required={ required }
				pattern={ pattern }
				autoComplete={ autocomplete }
				className={ fieldClassName }
				disabled={ disabled }
				defaultValue={ initialValue }
			/>
			{ label && (
				<label className={ labelClassName } htmlFor={ id }>{ label }</label>
			) }
		</>
	);

	const renderSubmitButton = () => (
		<button
			type='submit'
			name='action'
			className={ fieldClassName }
			disabled={ disabled }
		>
			{ renderInSubmit }
		</button>
	);

	const renderSelectField = () => {
		return (
			<select
				name={ name }
				id={ id }
				onChange={ onChange }
				className={ fieldClassName }
				value={ initialValue }
			>
				{ selectOptions.map(
					(option) => {
						if (initialValue) {
							return (
								<option key={ option.value } value={ option.value }>
									{ option.label }
								</option>
							);
						}

						return (
							<option key={ option.value } value={ option.value }>
								{ option.label }
							</option>
						);
					}
				) }
			</select>
		);
	};

	const renderField = () => {
		switch (type) {
			case 'password':
				return renderInputField();
			case 'submit':
				return renderSubmitButton();
			case 'text':
				return renderInputField();
			case 'select':
				return renderSelectField();
			default:
				return null;
		}
	};

	return (
		<>
			{ renderBefore }
			<div className={ wrapperClassName }>
				{ renderField() }
			</div>
			{ renderAfter }
		</>
	);
}
