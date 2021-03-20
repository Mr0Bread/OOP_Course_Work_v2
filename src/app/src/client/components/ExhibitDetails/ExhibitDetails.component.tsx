import ComponentPropsInterface from 'Component/ExhibitDetails/interfaces/componentProps.interface';
import Loader from 'Component/Loader';
import MainLayout from 'Layout/client/MainLayout';

export default function ExhibitDetailsComponent(props: ComponentPropsInterface) {
  const { isLoading, exhibitDetails } = props;

  if (isLoading) {
    return (
      <div>
		<Loader />
	  </div>
	);
  }

  return (
	<MainLayout>
	  <div>
		Hi
	  </div>
	</MainLayout>
  );
};
