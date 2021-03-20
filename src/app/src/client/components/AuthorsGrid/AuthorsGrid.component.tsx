import Grid from 'Component/Grid';
import Link from 'next/link';
import ComponentPropsInterface from 'Component/AuthorsGrid/interfaces/componentProps.interface';
import Loader from 'Component/Loader';

export default function AuthorsGridComponent(props: ComponentPropsInterface) {
	const {
		isLoading,
		columns,
		authors,
		onDelete,
		onEdit
	} = props;

	if (isLoading) {
		return (
			<div className='w-full h-screen flex justify-center items-center'>
				<Loader />
			</div>
		);
	}

	const authorsGridClasses = [
		'flex',
		'justify-center',
		'flex-col',
		'mx-12'
	];

	return (
		<div className={ authorsGridClasses.join(' ') }>
			<div className='flex justify-end'>
				<Link href='/admin/authors/add'>
					<a>
						Add Author
					</a>
				</Link>
			</div>
			<Grid
				columns={ columns }
				rows={ authors }
				doRenderActionColumn
				onDelete={ onDelete }
				onEdit={ onEdit }
			/>
		</div>
	);
};
