import styles from './EpochsList.module.scss';
import ComponentPropsInterface from 'Component/Client/EpochsList/interfaces/componentProps.interface';
import Loader from 'Component/Loader';
import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';
import ContentWrapper from 'Component/ContentWrapper';
import EpochCard from 'Component/Client/EpochCard';

export default function EpochsListComponent(
	{
		isLoading,
		epochs
	}: ComponentPropsInterface
) {

	if (isLoading) {
		return (
			<div className={ styles.Loader }>
				<Loader />
			</div>
		);
	}

	const renderEpochCard = (epoch: EpochInterface) => {
		return (
			<EpochCard key={ epoch.id } epoch={ epoch }/>
		);
	}

	return (
		<div className={ styles.EpochsList }>
			<ContentWrapper>
				<div className={ styles.CardsContainer }>
					{ epochs.map(renderEpochCard) }
				</div>
			</ContentWrapper>
		</div>
	);
}
