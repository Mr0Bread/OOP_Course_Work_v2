import Dashboard from 'Component/Dashboard';
import ValidateToken from 'Server-Side/hooks/ValidateToken';

export default function AdminPage() {
  return (
	<Dashboard />
  );
}

export const getServerSideProps = async (context) => {
  const result = await ValidateToken(context);

  return result;
}
