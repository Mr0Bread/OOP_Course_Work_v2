import AddExhibit from 'Component/AddExhibit';
import ValidateToken from 'Server-Side/hooks/ValidateToken';

export default function AddExhibitPage() {
  return (
    <AddExhibit />
  );
}

export const getServerSideProps = async (context) => {
  const result = await ValidateToken(context);

  return result
}
