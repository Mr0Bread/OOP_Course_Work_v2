import GridButtons from 'Component/GridButtons';
import Grid from 'Component/Grid';
import { ButtonsSettings } from 'Component/GridButtons/interfaces/containerProps.interface';
import ComponentPropsInterface from 'Component/TypesGrid/interfaces/componentProps.interface';
import Loader from 'Component/Loader';

export default function TypesGridComponent(props: ComponentPropsInterface) {
	const {
		columns,
		rows,
		isLoading,
		onDelete,
		onEdit
	} = props;

	const gridButtonsSettings: ButtonsSettings[] = [
		{
			buttonText: 'Add Type',
			href: '/admin/types/add'
		}
	];

	if (isLoading) {
		return (
			<div className='h-screen flex justify-center items-center'>
				<Loader />
			</div>
		);
	}

	return (
		<>
			<GridButtons
				settings={ gridButtonsSettings }
			/>
			<Grid
				columns={ columns }
				rows={ rows }
				doRenderActionColumn
				onDelete={ onDelete }
				onEdit={ onEdit }
			/>
		</>
	);
}
