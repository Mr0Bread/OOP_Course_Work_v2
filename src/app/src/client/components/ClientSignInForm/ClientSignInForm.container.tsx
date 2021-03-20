import ClientSignInFormComponent from 'Component/ClientSignInForm/ClientSignInForm.component';
import useRequests from 'Hooks/Requests';
import React, { useState } from 'react';
import CustomerInterface from 'Server/modules/customer/interfaces/customer.interface';

export default function ClientSignInForm() {
  const [formData, setFormData] = useState<CustomerInterface>({
    id: 0,
    login: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { fetchPost } = useRequests();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: {
        name,
        value
      }
    } = e;

    setFormData(prevState => Object.assign(prevState, { [name]: value }));
  }

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsLoading(true);

    fetchPost<{ access_token: string, message?: string, statusCode?: number }>(
      '/auth/signin',
      JSON.stringify(formData)
    )
      .then(
        (res) => {
          const {
            access_token,
            message,
            statusCode
          } = res;
          setIsLoading(false);

          if (statusCode) {
            console.log(message);
            return;
          }

          if (!access_token) {
            console.log('No access token returned');
            return;
          }

          console.log(access_token);
        },
        (err) => {
          setIsLoading(false);
          console.log(err);
        }
      );
  }

  const containerProps = {
    isLoading
  };

  const containerFunctions = {
    onSubmit,
    onChange
  };

  return (
    <ClientSignInFormComponent
      { ...containerProps }
      { ...containerFunctions }
    />
  );
}
