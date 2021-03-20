import ComponentPropsInterface from 'Component/EpochsGrid/interfaces/componentProps.interface';
import GridButtons from 'Component/GridButtons';
import Grid from 'Component/Grid';
import Loader from 'Component/Loader';
import { ButtonsSettings } from 'Component/GridButtons/interfaces/containerProps.interface';

export default function EpochsGridComponent(props: ComponentPropsInterface) {
	const {
		columns,
		rows,
		isLoading,
		onDelete,
		onEdit
	} = props;

	if (isLoading) {
		return (
			<div className='min-h-screen flex justify-center items-center'>
				<Loader />
			</div>
		);
	}

	const buttonSettings: ButtonsSettings[] = [
		{
			buttonText: 'Add Epoch',
			href: '/admin/epochs/add'
		}
	];

	return (
		<>
			<GridButtons
				settings={ buttonSettings }
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
