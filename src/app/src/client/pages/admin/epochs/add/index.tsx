import ValidateToken from 'Server-Side/hooks/ValidateToken';
import AddEpoch from 'Component/AddEpoch';

export default function AddEpochPage() {
  return (
	<AddEpoch />
  );
};

export const getServerSideProps = async (context) => {
  const result = await ValidateToken(context);

  return result;
};
