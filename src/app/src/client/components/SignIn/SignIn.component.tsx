import ComponentPropsInterface from './interface/componentProps.interface';
import Loader from '../Loader';
import { FormSettingsInterface } from 'Component/DynamicForm/interfaces/ComponentProps.interface';
import DynamicForm from 'Component/DynamicForm';

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

    const loginFieldClassName = loginFieldClasses.join(' ');

    const passwordFieldClasses = [
        ...loginFieldClasses,
        'mt-6'
    ];

    const passwordFieldClassName = passwordFieldClasses.join(' ');

    const submitFieldClasses = [
        'rounded',
        'bg-blue-500',
        'w-full',
        'mt-6',
        'text-xl',
        'hover:bg-blue-600',
        'transition-colors'
    ];

    const submitFieldClassName = submitFieldClasses.join(' ');

    const renderInSubmit = () => {
        if (isLoading) {
            return (
              <Loader />
            );
        }

        return 'Submit';
    }

    const formSettings: FormSettingsInterface = {
        onSubmit,
        fieldSettings: [
            {
                type: 'text',
                onChange,
                id: 'login',
                name: 'login',
                required: true,
                placeholder: 'Login',
                fieldClassName: loginFieldClassName,
                disabled: isLoading
            },
            {
                type: 'password',
                onChange,
                id: 'password',
                name: 'password',
                required: true,
                placeholder: 'Password',
                fieldClassName: passwordFieldClassName,
                disabled: isLoading
            },
            {
                type: 'submit',
                onChange: () => null,
                id: 'submit',
                name: 'submit',
                fieldClassName: submitFieldClassName,
                disabled: isLoading,
                renderInSubmit: renderInSubmit()
            }
        ]
    };

    return (
      <div>
          <DynamicForm formSettings={ formSettings } />
      </div>
    );

    // return (
    //   <div>
    //       <Form onSubmit={ onSubmit }>
    //           <Field
    //             type='text'
    //             onChange={ onChange }
    //             id='login'
    //             name='login'
    //             required
    //             placeholder='Login'
    //             fieldClassName={ loginFieldClasses.join(' ') }
    //             disabled={ isLoading }
    //           />
    //           <Field
    //             type='password'
    //             onChange={ onChange }
    //             id='password'
    //             name='password'
    //             required
    //             placeholder='Password'
    //             fieldClassName={ passwordFieldClasses.join(' ') }
    //             disabled={ isLoading }
    //           />
    //           <Field
    //             onChange={ () => null }
    //             type='submit'
    //             id='submit'
    //             name='submit'
    //             fieldClassName={ submitFieldClasses.join(' ') }
    //             disabled={ isLoading }
    //             renderInSubmit={ renderInSubmit() }
    //           />
    //       </Form>
    //   </div>
    // );
}
