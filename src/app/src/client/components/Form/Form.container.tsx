import FormComponent from './Form.component';
import IProps from './interfaces/containerProps.interface';

export default function Form(props: IProps) {
  const {
	children
  } = props;

  return (
	<FormComponent { ...props }>
	  { children }
	</FormComponent>
  );
}
