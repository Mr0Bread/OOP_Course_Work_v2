import ComponentPropsInterface from 'Component/Grid/interfaces/componentProps.interface';
import styles from './Grid.module.css';
import ColumnInterface from 'Component/Grid/interfaces/column.interface';
import Dropdown from 'Component/Dropdown';

export default function GridComponent(props: ComponentPropsInterface) {
	const {
		columns,
		rows,
		doRenderActionColumn = false,
		onDelete = () => null,
		onEdit = () => null
	} = props;

	if (rows.length === 0) {
		return (
			<div>
				<h2 className='text-center text-2xl'>
					No records found
				</h2>
			</div>
		);
	}

	const renderBaseColumns = (column: ColumnInterface) => (
		<th className={ styles.defCol } key={ column.name }>{ column.name }</th>);

	const renderActionColumnHeader = () => {
		return (
			<th className={ styles.defCol } key='actionCol'>
				Action
			</th>
		);
	};

	const renderActionColumn = (id) => {
		return (
			(
				<td className={ styles.defData } key='action'>
					<Dropdown>
						<button onClick={ () => onDelete(id) }>
							Delete
						</button>
						<button onClick={ () => onEdit(id) }>
							Edit
						</button>
					</Dropdown>
				</td>
			)
		);
	}

	return (
		<table>
			<tbody>
			<tr key='header'>
				{ columns.map(renderBaseColumns) }
				{ doRenderActionColumn ? renderActionColumnHeader() : null }
			</tr>
			{ rows.map(
				(row) => {
					const { id } = row;

					return (
						<tr key={ id }>
							{ columns.map(
								(column) => {
									const { name } = column;

									return (
										<td className={ styles.defData } key={ name }>{ row[name] }</td>
									);
								}
							) }
							{ doRenderActionColumn ? renderActionColumn(id) : null }
						</tr>
					);
				}
			) }
			</tbody>
		</table>
	);
};
