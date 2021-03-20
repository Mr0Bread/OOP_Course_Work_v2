import ClientPageComponent from './MainLayout.component';
import ContainerPropsInterface from './interfaces/containerProps.interface';

export default function MainLayout(props: ContainerPropsInterface) {
  const { children } = props;

  return (
	<ClientPageComponent>
	  { children }
	</ClientPageComponent>
  );
};
