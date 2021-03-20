import MainLayoutComponent from './MainLayout.component';
import ContainerPropsInterface from './interfaces/containerProps.interface';

export default function MainLayout(props: ContainerPropsInterface) {
    const { children, ...rest } = props;

    return (
      <MainLayoutComponent { ...rest }>
          { children }
      </MainLayoutComponent>
    );
}
