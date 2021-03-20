import ValidateToken from 'Server-Side/hooks/ValidateToken';
import Exhibits from 'Component/Exhibits';

export default function ExhibitsPage() {
  return (
    <Exhibits />
  );
};

export const getServerSideProps = async (context) => {
  const result = await ValidateToken(context);

  return result
}
