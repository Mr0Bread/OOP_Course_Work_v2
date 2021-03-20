import React from 'react';
import RowInterface from 'Component/Grid/interfaces/row.interface';

export interface ChildrenComponentProps {
  isLoading: boolean;
  setIsLoading: (any) => any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialFormData: RowInterface;
  [key: string]: any;
}

export default interface ComponentPropsInterface extends ChildrenComponentProps {
  children: JSX.Element;
}
