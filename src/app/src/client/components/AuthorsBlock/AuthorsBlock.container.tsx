import AuthorsBlockComponent from 'Component/AuthorsBlock/AuthorsBlock.component';
import { useRouter } from 'next/router';

export default function AuthorsBlock() {
  const router = useRouter();

  const onClick = () => {
	router.push('/authors');
  }

  return (
    <AuthorsBlockComponent onClick={ onClick } />
  );
};
