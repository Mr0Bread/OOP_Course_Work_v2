import AuthorForm from 'Component/Admin/AuthorForm';
import MainLayout from 'Layout/admin/MainLayout';

export default function EditAuthorComponent(props) {
	return (
		<MainLayout>
			<AuthorForm { ...props } />
		</MainLayout>
	);
}
