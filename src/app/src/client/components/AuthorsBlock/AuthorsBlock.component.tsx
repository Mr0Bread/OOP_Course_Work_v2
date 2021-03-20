import HomeBlock from 'Component/HomeBlock';
import ComponentPropsInterface from 'Component/AuthorsBlock/interfaces/componentProps.interface';

export default function AuthorsBlockComponent(props: ComponentPropsInterface) {
  const { onClick } = props;

  return (
	<HomeBlock
	  onClick={ onClick }
	  text="Famous creators of Japan"
	  imageSrc="/images/4d970301-1cc4-447b-982b-694d9f505859.jpeg"
	/>
  );
};
