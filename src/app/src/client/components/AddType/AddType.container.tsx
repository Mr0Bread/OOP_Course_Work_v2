import AddTypeComponent from 'Component/AddType/AddType.component';
import TypeInterface from 'Server/modules/type/interfaces/type.interface';
import AdminFormContainer from 'Component/AdminFormContainer';

function AddTypeContainer(props) {
	return (
		<AddTypeComponent { ...props } />
	);
}

export default function AddType() {
	const initialFormData: TypeInterface = {
		id: 0,
		label: ''
	};

	return (
		<AdminFormContainer
			initialFormData={ initialFormData }
			redirectOnSuccess='/admin/types'
			submitHref='/type/createOne'
		>
			<AddTypeContainer />
		</AdminFormContainer>
	);
}
