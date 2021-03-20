import { GetServerSideProps } from 'next';
import ValidateToken from 'Server-Side/hooks/ValidateToken';
import EditAuthor from 'Component/Admin/EditAuthor';

export default function EditAuthorPage({ authorId }) {
	return (
		<EditAuthor id={ authorId } />
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
			authorId: id,
			...result
		}
	};
};
