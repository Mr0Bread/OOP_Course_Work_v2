import AdminFormContainer from 'Component/AdminFormContainer';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';
import AddEpochComponent from 'Component/AddEpoch/AddEpoch.component';

function AddEpochContainer(props) {
  return (
	<AddEpochComponent { ...props } />
  );
}

export default function AddEpoch() {
  const initialFormData: EpochInterface = {
    id: 0,
	image: '',
	description: '',
	label: ''
  };

  return (
	<AdminFormContainer
	  initialFormData={ initialFormData }
	  redirectOnSuccess='/admin/epochs'
	  submitHref='/epoch/createOne'
	>
	  <AddEpochContainer />
	</AdminFormContainer>
  );
}
