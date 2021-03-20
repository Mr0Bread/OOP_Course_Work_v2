import ComponentPropsInterface from 'Component/ExhibitCard/interfaces/componentProps.interface';
import styles from './ExhibitCard.module.scss';
import Link from 'next/link';

export default function ExhibitCardComponent(props: ComponentPropsInterface) {
  const { exhibit } = props;

  const exhibitCardClasses = [
	'flex',
	'flex-col',
	styles.Container
  ];

  console.log(exhibit.image);

  let imageElement = (
	<h4>
	  Image not found
	</h4>
  );

  if ((new RegExp('((http|https)://)(www.)?” \n' +
	'+ “[a-zA-Z0-9@:%._\\\\+~#?&//=]{2,256}\\\\.[a-z]” \n' +
	'+ “{2,6}\\\\b([-a-zA-Z0-9@:%._\\\\+~#?&//=]*)')).test(exhibit.image)) {
	imageElement = (
	  <img src={ exhibit.image } alt="card image" />
	);
  }

  return (
	<Link href={ `/exhibit?id=${ exhibit.id }` }>
	  <div className={ exhibitCardClasses.join(' ') }>
		<div className={ styles.Image }>
		  { imageElement }
		</div>
		<div>
		  <div>
			{ exhibit.name }
		  </div>
		  <div>
			{ exhibit.description }
		  </div>
		</div>
	  </div>
	</Link>
  );
};
