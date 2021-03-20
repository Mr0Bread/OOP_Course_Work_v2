import React from 'react';

export default interface ComponentPropsInterface {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    onSubmit: (e: Event) => any;
    isLoading: boolean;
}
