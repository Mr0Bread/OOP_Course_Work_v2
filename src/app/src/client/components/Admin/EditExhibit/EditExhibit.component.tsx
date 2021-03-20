import ExhibitForm from 'Component/Admin/ExhibitForm';
import ComponentPropsInterface from 'Component/Admin/EditExhibit/interfaces/componentProps.interface';

export default function EditExhibitComponent(props) {
	return (
		<div>
			<ExhibitForm { ...props as ComponentPropsInterface } renderInSubmit='Update Exhibit' />
		</div>
	);
}
