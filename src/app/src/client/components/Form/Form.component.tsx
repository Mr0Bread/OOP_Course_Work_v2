import IProps from './interfaces/componentProps.interface';

export default function FormComponent(props: IProps) {
  const {
	children,
	onSubmit,
	className
  } = props;

  return (
	<form
	  onSubmit={ onSubmit }
	  className={ className }
	>
	  { children }
	</form>
  );
}
