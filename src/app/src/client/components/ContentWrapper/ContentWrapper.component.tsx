import ComponentPropsInterface from 'Component/ContentWrapper/interfaces/componentProps.interface';
import styles from './ContentWrapper.module.scss';

export default function ContentWrapperComponent(props: ComponentPropsInterface) {
  const { children } = props;

  return (
    <div className={ styles.ContentWrapper }>
	  { children }
	</div>
  );
};
