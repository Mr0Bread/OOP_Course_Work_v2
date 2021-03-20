import ExhibitFormComponent from 'Component/Admin/ExhibitForm/ExhibitForm.component';
import ContainerPropsInterface from 'Component/Admin/ExhibitForm/interfaces/containerProps.interface';

export default function ExhibitForm(props: ContainerPropsInterface) {
	return (
		<ExhibitFormComponent
			{ ...props }
		/>
	);
}
