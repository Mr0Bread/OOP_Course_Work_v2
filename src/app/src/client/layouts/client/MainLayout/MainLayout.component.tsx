import ComponentPropsInterface from './interfaces/componentProps.interface';
import Header from 'Component/Header';

export default function MainLayoutComponent(props: ComponentPropsInterface) {
  const { children } = props;

  return (
    <>
      <Header />
      { children }
    </>
  );
}
