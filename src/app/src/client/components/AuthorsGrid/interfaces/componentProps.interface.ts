import AuthorInterface from 'Server/modules/author/interfaces/author.interface';

export default interface ComponentPropsInterface {
  isLoading: boolean;
  authors: AuthorInterface[];
  columns: { name: string }[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}
