import React from 'react';
import { SelectOption } from 'Component/Field/interfaces/containerProps.interface';

export default interface ComponentPropsInterface {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => any;
  isLoading: boolean;
  types: SelectOption[];
}
