import styles from './Header.module.scss';
import Link from 'next/link';

export default function HeaderComponent() {
	return (
		<header className={ styles.Header }>
			<nav>
				<div className={ styles.LinkWrapper }>
					<Link href='/'>
						<a>
							Home
						</a>
					</Link>
				</div>
				<div className={ styles.LinkWrapper }>
					<Link href='/exhibits'>
						<a>
							Exhibits
						</a>
					</Link>
				</div>
				<div className={ styles.LinkWrapper }>
					<Link href='/authors'>
						<a>
							Authors
						</a>
					</Link>
				</div>
				<div className={ styles.LinkWrapper }>
					<Link href='/epochs'>
						<a>
							Epochs
						</a>
					</Link>
				</div>
				<div className={ styles.LinkWrapper }>
					<Link href='/signin'>
						<a>
							Sign in
						</a>
					</Link>
				</div>
			</nav>
		</header>
	);
};
