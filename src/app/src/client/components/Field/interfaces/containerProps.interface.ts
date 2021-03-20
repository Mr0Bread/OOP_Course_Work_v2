type inputType = 'text' | 'password' | 'submit' | 'select';

type autocompleteType = 'on' | 'off';

export interface SelectOption {
  label: string;
  value: number;
}

export default interface IProps {
  type: inputType;
  name: string;
  id: string;
  onChange: (any) => any;
  label?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  pattern?: string;
  renderAfter?: JSX.Element | JSX.Element[];
  renderBefore?: JSX.Element | JSX.Element[];
  autocomplete?: autocompleteType;
  fieldClassName?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  renderInSubmit?: JSX.Element | JSX.Element[] | string;
  selectOptions?: SelectOption[];
  initialValue?: string | number;
}
