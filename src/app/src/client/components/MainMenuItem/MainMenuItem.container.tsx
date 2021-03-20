import MainMenuItemComponent from 'Component/MainMenuItem/MainMenuItem.component';
import ContainerPropsInterface from 'Component/MainMenuItem/interfaces/containerProps.interface';

export default function MainMenuItem(props: ContainerPropsInterface) {
  const { children } = props;

  return (
	<MainMenuItemComponent { ...props }>
	  { children }
	</MainMenuItemComponent>
  );
}
