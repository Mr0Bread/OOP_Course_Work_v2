import ValidateToken from 'Server-Side/hooks/ValidateToken';
import Epochs from 'Component/Epochs';

export default function EpochsPage() {
  return (
    <Epochs />
  );
};

export const getServerSideProps = async (context) => {
  const result = await ValidateToken(context);

  return result
}
