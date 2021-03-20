import HomeBlock from 'Component/HomeBlock';
import ComponentPropsInterface from 'Component/EpochsBlock/interfaces/componentProps.interface';

export default function EpochsBlockComponent(props: ComponentPropsInterface) {
	const {
	  onClick
	} = props;

	return (
	  <HomeBlock
	  onClick={ onClick }
	  text="Explore all epochs"
	  imageSrc=''
	  />
	);
}
