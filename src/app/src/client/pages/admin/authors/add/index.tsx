import ValidateToken from 'Server-Side/hooks/ValidateToken';
import AddAuthor from 'Component/AddAuthor';

export default function AddAuthorPage() {
  return (
    <AddAuthor />
  );
};

export const getServerSideProps = async (context) => {
  const result = await ValidateToken(context);

  return result
}
