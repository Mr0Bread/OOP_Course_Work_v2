import React from 'react';
import { SelectOption } from 'Component/Field/interfaces/containerProps.interface';

export default interface ComponentPropsInterface {
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  epochSelectOptions: SelectOption[];
}
