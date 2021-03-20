import ExhibitInterface from '../../../../server/modules/exhibit/interfaces/exhibit.interface';

export default interface ComponentPropsInterface {
  isLoading: boolean;
  exhibits: Array<ExhibitInterface>;
  columns: Array<{ name: string }>;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}
