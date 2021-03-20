import { GetServerSideProps } from 'next';
import ValidateToken from 'Server-Side/hooks/ValidateToken';
import MainLayout from 'Layout/admin/MainLayout';
import EditExhibit from 'Component/Admin/EditExhibit';

export default function EditExhibitPage({ exhibitId }) {
	return (
		<MainLayout>
			<EditExhibit id={ exhibitId } />
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { params } = context;

	const result = await ValidateToken(context);

	if ('redirect' in result) {
		return result;
	}

	const {
		id
	} = params;

	return {
		props: {
			exhibitId: id,
			...result
		}
	};
};
