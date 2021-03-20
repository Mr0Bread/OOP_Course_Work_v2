import ValidateToken from 'Server-Side/hooks/ValidateToken';
import Types from 'Component/Types';

export default function TypesPage() {
	return (
	  <Types />
	);
};

export const getServerSideProps = async (context) => {
  const result = await ValidateToken(context);

  return result;
}
