import GridButtonsComponent from 'Component/GridButtons/GridButtons.component';
import ContainerPropsInterface from 'Component/GridButtons/interfaces/containerProps.interface';

export default function GridButtons(props: ContainerPropsInterface) {
  return (
	<GridButtonsComponent { ...props } />
  );
}
