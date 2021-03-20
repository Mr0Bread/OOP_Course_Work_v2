import { GetServerSideProps } from 'next';
import ValidateToken from 'Server-Side/hooks/ValidateToken';
import MainLayout from 'Layout/admin/MainLayout';
import EditEpoch from 'Component/Admin/EditEpoch';

export default function EditEpochPage({ epochId }) {
	return (
		<MainLayout>
			<EditEpoch id={ epochId } />
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
			epochId: id,
			...result
		}
	};
};
