import ClickOutsideComponent from 'Component/ClickOutside/ClickOutside.component';
import ContainerPropsInterface from 'Component/ClickOutside/interfaces/containerProps.interface';

export default function ClickOutside(props: ContainerPropsInterface) {
  const {
    children,
    onClick
  } = props;

  return (
    <ClickOutsideComponent onClick={ onClick }>
      { children }
    </ClickOutsideComponent>
  );
}
