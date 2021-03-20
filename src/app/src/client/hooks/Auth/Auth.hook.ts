import useRequests from 'Hooks/Requests';

export default function useAuth() {
  const { fetchPost } = useRequests();

  const validateToken = async (token: string) => {
	const response = await fetchPost(
	  '/auth/validateToken',
	  JSON.stringify({ token })
	);

	return response;
  }

  const performSignInAdmin = async (signInData: {login: string; password: string}) => {
    return fetchPost(
      '/auth/signinadmin',
	  JSON.stringify(signInData)
	);
  }

  return {
    validateToken,
	performSignInAdmin
  };
}
