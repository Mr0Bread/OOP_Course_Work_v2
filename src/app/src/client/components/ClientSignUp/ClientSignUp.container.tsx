import ClientSignUpComponent from 'Component/ClientSignUp/ClientSignUp.component';
import React, { useState } from 'react';
import useRequests from 'Hooks/Requests';
import { HttpStatus } from '@nestjs/common';

export default function ClientSignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
	login: '',
	password: '',
	password2: ''
  });
  const { fetchPost } = useRequests();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: {
        value,
		name
	  }
	} = e;

    setFormData(prevState => Object.assign(prevState, { [name]: value }));
  };

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
	e.preventDefault();

	const {
	  password,
	  password2
	} = formData;

	if (password !== password2) {
	  console.log('Passwords does not match!');
	  return;
	}

	setIsLoading(true);

	fetchPost<{ message?:string; statusCode?:number;access_token?:string }>(
	  '/auth/signup',
	  JSON.stringify(formData)
	)
	  .then(
		(res) => {
		  const {
		    statusCode,
			message,
			access_token
		  } = res;

		  if (statusCode && statusCode === HttpStatus.BAD_REQUEST) {
			console.log(message);
			return;
		  }

		  if (access_token) {
			console.log(access_token);
		  }

		  setIsLoading(false);
		},
		(err) => {
		  console.log(err);
		  setIsLoading(false);
		}
	  );
  }

  const containerFunctions = {
    onChange,
	onSubmit
  };

  const containerProps = {
    isLoading
  };

  return (
	<ClientSignUpComponent
	  { ...containerFunctions }
	  { ...containerProps }
	/>
  );
}
