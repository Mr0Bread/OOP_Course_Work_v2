import textInputs from '../Form/Form.config';
import FieldComponent from './Field.component';
import IProps from './interfaces/containerProps.interface';

export default function Field(props: IProps) {
    const {
        maxLength,
        onChange,
        type,
        ...rest
    } = props;

    const containerFunctions = {
        onChange
    };

    const containerProps = {
        ...rest,
        type
    };

    if (maxLength && textInputs.includes(type)) {
        containerFunctions.onChange = function limitedOnChange(e) {
            const { target: { value = '', name } } = e;

            if (value.length <= maxLength) {
                onChange({ target: { value, name } });
            } else {
                e.target.value = value.slice(0, maxLength);
            }
        };
    }

    return (<FieldComponent { ...containerFunctions } { ...containerProps } />);
}
