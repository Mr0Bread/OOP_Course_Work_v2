import HomeBlock from 'Component/HomeBlock';
import ComponentPropsInterface from 'Component/ExhibitsBlock/interfaces/componentProps.interface';

export default function ExhibitsBlockComponent(props: ComponentPropsInterface) {
  const { onClick } = props;

  return (
	<HomeBlock
		onClick={ onClick }
		text="Explore all exhibits"
		imageSrc='https://upload.wikimedia.org/wikipedia/commons/0/0d/Great_Wave_off_Kanagawa2.jpg'
	/>
  );
};
