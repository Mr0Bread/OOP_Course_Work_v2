export default interface ComponentPropsInterface {
  onButtonClick: () => void;
  isExpanded: boolean;
  children: JSX.Element | JSX.Element[];
}
