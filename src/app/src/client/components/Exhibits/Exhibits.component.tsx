import MainLayout from 'Layout/admin/MainLayout';
import ExhibitsGrid from 'Component/ExhibitsGrid';

export default function ExhibitsComponent() {
  return (
    <MainLayout>
	  <div>
		<ExhibitsGrid />
	  </div>
	</MainLayout>
  );
}
