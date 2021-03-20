export interface ButtonsSettings {
  buttonText: string;
  className?: string;
  onClick?: (any) => any;
  isLink?: boolean;
  href?: string;
}

export default interface ContainerPropsInterface {
  settings: ButtonsSettings[];
  className?: string;
}
