import Form from '../Form';
import Field from '../Field';
import ComponentPropsInterface from './interface/componentProps.interface';
import Loader from '../Loader';

export default function SignInComponent(props: ComponentPropsInterface) {
    const {
        onChange,
        onSubmit,
        isLoading
    } = props;

    const loginFieldClasses = [
        'rounded',
        'text-2xl'
    ];

    const passwordFieldClasses = [
        ...loginFieldClasses,
        'mt-6'
    ];

    const submitFieldClasses = [
        'rounded',
        'bg-blue-500',
        'w-full',
        'mt-6',
        'text-xl',
        'hover:bg-blue-600',
        'transition-colors'
    ];

    const renderInSubmit = () => {
        if (isLoading) {
            return (
              <Loader />
            );
        }

        return 'Submit';
    }

    return (
      <div>
          <Form onSubmit={ onSubmit }>
              <Field
                type='text'
                onChange={ onChange }
                id='login'
                name='login'
                required
                placeholder='Login'
                fieldClassName={ loginFieldClasses.join(' ') }
                disabled={ isLoading }
              />
              <Field
                type='password'
                onChange={ onChange }
                id='password'
                name='password'
                required
                placeholder='Password'
                fieldClassName={ passwordFieldClasses.join(' ') }
                disabled={ isLoading }
              />
              <Field
                onChange={ () => null }
                type='submit'
                id='submit'
                name='submit'
                fieldClassName={ submitFieldClasses.join(' ') }
                disabled={ isLoading }
                renderInSubmit={ renderInSubmit() }
              />
          </Form>
      </div>
    );
}
