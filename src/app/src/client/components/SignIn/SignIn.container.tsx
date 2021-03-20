import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SignInComponent from './SignIn.component';
import useBrowserDatabase from 'Hooks/BrowserDatabase';
import useAuth from 'Hooks/Auth';

export default function SignIn() {
  const [signInData, setSignInData] = useState({ login: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { setItem } = useBrowserDatabase();
  const { performSignInAdmin } = useAuth();

  const router = useRouter();

  const onSubmit = (e: Event) => {
	e.preventDefault();
	setIsLoading(true);

	performSignInAdmin(
	  signInData
	)
	  .then(
		(res) => {
		  const { access_token: accessToken } = res as { access_token: string };

		  if (accessToken) {
			setItem({ accessToken }, Object.keys({ accessToken })[0], 300);
			router.push('/admin');
		  }
		},
		(err) => {
		  setIsLoading(false);
		  console.log(err);
		}
	  );
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const {
	  currentTarget: {
		value,
		name
	  }
	} = e;

	setSignInData(
	  (prevState) => Object.assign(prevState, { [name]: value }));
  };

  const containerProps = {
	signInData,
	isLoading
  };

  const containerFunctions = {
	onChange,
	onSubmit
  };

  return (
	<SignInComponent
	  { ...containerFunctions }
	  { ...containerProps }
	/>
  );
}
