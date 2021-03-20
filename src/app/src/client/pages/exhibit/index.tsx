import ExhibitDetails from 'Component/ExhibitDetails';

export default function ExhibitDetailsPage(props: { id: number }) {
  const { id } = props;

  return (
    <ExhibitDetails id={ id }/>
  );
}

export const getServerSideProps = (context) => {
  const { req: { query: { id } } } = context;

  return {
    props: {
      id
    }
  };
}
