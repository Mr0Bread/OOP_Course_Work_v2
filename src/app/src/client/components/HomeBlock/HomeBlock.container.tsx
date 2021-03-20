import ContainerPropsInterface from 'Component/HomeBlock/interfaces/containerProps.interface';
import HomeBlockComponent from 'Component/HomeBlock/HomeBlock.component';

export default function HomeBlock(props: ContainerPropsInterface) {
  return (
	<HomeBlockComponent { ...props } />
  );
};
