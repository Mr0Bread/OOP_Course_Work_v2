import ComponentPropsInterface from 'Component/DynamicForm/interfaces/ComponentProps.interface';
import DynamicFormComponent from 'Component/DynamicForm/DynamicForm.component';

export default function DynamicForm(props: ComponentPropsInterface) {
	return (
		<DynamicFormComponent {...props} />
	);
}
