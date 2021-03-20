import styles from './HomeBlock.module.scss';
import ComponentPropsInterface from 'Component/HomeBlock/interfaces/componentProps.interface';

export default function HomeBlockComponent(props: ComponentPropsInterface) {
  const { text, imageSrc, onClick } = props;
  return (
    <div className={ styles.ExhibitsBlock } onClick={ onClick }>
      <div className={ styles.Content }>
        <div className={ styles.Image }>
          <img src={ imageSrc } alt="homeblock_logo" />
        </div>
        <div className={ styles.Text }>
          { text }
        </div>
      </div>
    </div>
  );
};
