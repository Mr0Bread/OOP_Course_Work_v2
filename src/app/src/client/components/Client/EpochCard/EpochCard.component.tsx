import ComponentPropsInterface from 'Component/Client/EpochCard/interfaces/componentProps.interface';
import styles from './EpochCard.module.scss';

export default function EpochCardComponent(
	{
		epoch
	}: ComponentPropsInterface
) {
	return (
		<div
			key={ epoch.id }
			className={ styles.EpochCard }
		>
			{ epoch.label }
		</div>
	);
}
