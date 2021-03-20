import { GetServerSideProps } from 'next';
import MainLayout from 'Layout/admin/MainLayout';
import EditType from 'Component/Admin/EditType';
import ValidateToken from 'Server-Side/hooks/ValidateToken';

export default function EditTypePage({ typeId }) {
	return (
		<MainLayout>
			<EditType id={ typeId } />
		</MainLayout>
	);
};

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
			typeId: id,
			...result
		}
	};
};
