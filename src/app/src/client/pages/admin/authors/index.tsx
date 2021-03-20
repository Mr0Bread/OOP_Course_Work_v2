import ValidateToken from 'Server-Side/hooks/ValidateToken';
import Authors from 'Component/Authors';

export default function AuthorsPage() {
  return (
    <Authors />
  );
};

export const getServerSideProps = async (context) => {
  const result = await ValidateToken(context);

  return result
}
