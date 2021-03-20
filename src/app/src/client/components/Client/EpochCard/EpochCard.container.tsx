import EpochCardComponent from 'Component/Client/EpochCard/EpochCard.component';
import ContainerPropsInterface from 'Component/Client/EpochCard/interfaces/containerProps.interface';

export default function EpochCard(props: ContainerPropsInterface) {
	return (
		<EpochCardComponent { ...props } />
	);
}
