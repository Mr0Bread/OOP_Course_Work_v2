import ValidateToken from 'Server-Side/hooks/ValidateToken';
import AddType from 'Component/AddType';

export default function AddTypePage() {
  return (
    <AddType />
  );
};

export const getServerSideProps = async (context) => {
  const result = await ValidateToken(context);

  return result;
}
