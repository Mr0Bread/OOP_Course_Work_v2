import ExhibitInterface from '../../../../server/modules/exhibit/interfaces/exhibit.interface';

export default interface ComponentPropsInterface {
  exhibits: ExhibitInterface[];
  isLoading: boolean;
}
