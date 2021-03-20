import GridComponent from 'Component/Grid/Grid.component';
import ContainerPropsInterface from 'Component/Grid/interfaces/containerProps.interface';

export default function Grid(props: ContainerPropsInterface) {
  return (
    <GridComponent { ...props } />
  );
};
