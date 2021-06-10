import { default as FieldContainerProps } from 'Component/Field/interfaces/containerProps.interface';

export interface FieldInterface extends FieldContainerProps {

}

export interface FormSettingsInterface {
	onSubmit: (any) => any;
	className?: string;
	fieldSettings: FieldInterface[]
}

export default interface ComponentPropsInterface {
	formSettings: FormSettingsInterface;
}
