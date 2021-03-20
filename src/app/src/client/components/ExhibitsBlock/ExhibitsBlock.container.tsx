import ExhibitsBlockComponent from 'Component/ExhibitsBlock/ExhibitsBlock.component';
import { useRouter } from 'next/router';

export default function ExhibitsBlock() {
  const router = useRouter();

  const onClick = () => {
    router.push('/exhibits');
  }

  const containerFunctions = {
    onClick
  };

  return (
    <ExhibitsBlockComponent { ...containerFunctions } />
  );
};
