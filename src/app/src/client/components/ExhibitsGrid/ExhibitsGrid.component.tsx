import ComponentPropsInterface from 'Component/ExhibitsGrid/interfaces/componentProps.interface';
import Loader from 'Component/Loader';
import Grid from 'Component/Grid';
import Link from 'next/link';

export default function ExhibitsGridComponent(props: ComponentPropsInterface) {
	const {
		isLoading,
		exhibits,
		columns,
		onDelete,
		onEdit
	} = props;

	if (isLoading) {
		return (
			<div className='h-screen flex justify-center items-center'>
				<Loader />
			</div>
		);
	}

	const exhibitsGridClasses = [
		'flex',
		'justify-center',
		'flex-col',
		'mx-12'
	];

	return (
		<div className={ exhibitsGridClasses.join(' ') }>
			<div className='flex justify-end'>
				<Link href='/admin/exhibits/add'>
					<a>Add Exhibit</a>
				</Link>
			</div>
			<Grid
				columns={ columns }
				rows={ exhibits }
				doRenderActionColumn
				onDelete={ onDelete }
				onEdit={ onEdit }
			/>
		</div>
	);
};
