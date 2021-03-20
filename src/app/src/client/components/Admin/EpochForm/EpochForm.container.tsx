import EpochFormComponent from 'Component/Admin/EpochForm/EpochForm.component';
import ContainerPropsInterface from 'Component/Admin/EpochForm/interfaces/containerProps.interface';

export default function EpochForm(props: ContainerPropsInterface) {
	return (
		<EpochFormComponent { ...props } />
	);
}
