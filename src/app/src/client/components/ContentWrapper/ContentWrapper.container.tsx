import ContentWrapperComponent from 'Component/ContentWrapper/ContentWrapper.component';
import ContainerPropsInterface from 'Component/ContentWrapper/interfaces/containerProps.interface';

export default function ContentWrapper(props: ContainerPropsInterface) {
  const { children } = props;

  return (
	<ContentWrapperComponent>
	  { children }
	</ContentWrapperComponent>
  );
}
