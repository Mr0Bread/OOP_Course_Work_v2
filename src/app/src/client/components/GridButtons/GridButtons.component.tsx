import ComponentPropsInterface from 'Component/GridButtons/interfaces/componentProps.interface';
import Link from 'next/link';

export const defaultClassName = 'flex justify-end';
export const defaultHref = '/admin';

export default function GridButtonsComponent(props: ComponentPropsInterface) {
  const {
    settings,
	className = defaultClassName
  } = props;

  return (
	<div className={ className }>
	  { settings.map(
		(setting, index) => {
		  const {
		    buttonText,
			className = '',
			isLink = true,
			onClick = () => null,
			href = defaultHref
		  } = setting;

		  if (isLink) {
		    return (
		      <Link href={ href } key={ index }>
				<a className={ className }>
				  { buttonText }
				</a>
			  </Link>
			);
		  }

		  return (
		    <button
			  className={ className }
			  onClick={ onClick }
			  key={ index }
			>
			  { buttonText }
			</button>
		  );
		}
	  ) }
	</div>
  );
}
