import ComponentPropsInterface from 'Component/ExhibitsList/interfaces/componentProps.interface';
import Loader from 'Component/Loader';
import ExhibitCard from 'Component/ExhibitCard';
import styles from './ExhibitsList.module.scss';

export default function ExhibitsListComponent(props: ComponentPropsInterface) {
  const { exhibits, isLoading } = props;

  if (isLoading) {
    return (
      <Loader />
	);
  }

  const exhibitsListClasses = [
    'grid',
	'grid-cols-4',
	styles.Container
  ];

  return (
    <div className={ exhibitsListClasses.join(' ') }>
	  { exhibits.map(
		(exhibit) => (<ExhibitCard key={ exhibit.id } exhibit={ exhibit }/>)
	  ) }
	</div>
  );
};
