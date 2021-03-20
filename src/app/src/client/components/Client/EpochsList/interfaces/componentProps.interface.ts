import EpochInterface from 'Server/modules/epoch/interfaces/epoch.interface';

export default interface ComponentPropsInterface {
	isLoading: boolean;
	epochs: EpochInterface[];
}
