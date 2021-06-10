import ComponentPropsInterface from 'Component/Client/AuthorsGrid/interfaces/ComponentProps.interface';
import Loader from 'Component/Loader';
import styles from './AuthorsGrid.module.scss';
import ContentWrapper from 'Component/ContentWrapper';

export default function AuthorsGridComponent(props: ComponentPropsInterface) {
	const {
		authors,
		isLoading
	} = props;

	if (isLoading) {
		return (
			<div className={ styles.LoaderContainer }>
				<Loader />
			</div>
		);
	}

	return (
		<main className={ styles.Page }>
			<ContentWrapper>
				<article className={ styles.Grid }>
					{
						authors.length ?
							authors.map(
								(author) => (
									<section key={ author.id }>
										{ author.name }
									</section>
								)
							) : (<section>There is no authors in our database yet!</section>)
					}
				</article>
			</ContentWrapper>
		</main>
	);
}
