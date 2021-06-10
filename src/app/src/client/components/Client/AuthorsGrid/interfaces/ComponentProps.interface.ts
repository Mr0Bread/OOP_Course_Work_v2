import AuthorInterface from 'Server/modules/author/interfaces/author.interface';

export default interface ComponentPropsInterface {
	authors: AuthorInterface[];
	isLoading: boolean;
}
