import ComponentPropsInterface, { FieldInterface } from 'Component/DynamicForm/interfaces/ComponentProps.interface';
import Form from 'Component/Form';
import Field from 'Component/Field';

export default function DynamicFormComponent(props: ComponentPropsInterface) {
	const {
		formSettings: {
			className,
			onSubmit,
			fieldSettings
		}
	} = props;

	const toFieldComponent = (fieldData: FieldInterface) => {
		return (
			<Field { ...fieldData } key={ fieldData.id } />
		);
	};

	const renderFields = () => {
		return fieldSettings.map(toFieldComponent);
	};

	return (
		<Form
			onSubmit={ onSubmit }
			className={ className }
		>
			{ renderFields() }
		</Form>
	);
}
