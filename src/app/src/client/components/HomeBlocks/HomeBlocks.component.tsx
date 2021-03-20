import ExhibitsBlock from 'Component/ExhibitsBlock';
import AuthorsBlock from 'Component/AuthorsBlock';
import EpochsBlock from 'Component/EpochsBlock';
import styles from './HomeBlocks.module.scss';

export default function HomeBlocksComponent() {
  return (
    <div className={ styles.HomeBlocks }>
	  <ExhibitsBlock />
	  <AuthorsBlock />
	  <EpochsBlock />
	  <ExhibitsBlock />
	</div>
  );
};
