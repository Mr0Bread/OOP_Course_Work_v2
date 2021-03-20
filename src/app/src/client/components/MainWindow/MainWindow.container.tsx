import MainWindowComponent from 'Component/MainWindow/MainWindow.component';
import ContainerPropsInterface from 'Component/MainWindow/interfaces/containerProps.interface';

export default function MainWindow(props: ContainerPropsInterface) {
  const { children } = props;

  return (
    <MainWindowComponent>
      { children }
    </MainWindowComponent>
  );
};
