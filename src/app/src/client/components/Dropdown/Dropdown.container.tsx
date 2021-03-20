import { useState } from 'react';
import DropdownComponent from 'Component/Dropdown/Dropdown.component';
import ContainerPropsInterface from 'Component/Dropdown/interfaces/containerProps.interface';

export default function Dropdown(props: ContainerPropsInterface) {
  const {
    children
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const onButtonClick = () => {
    setIsExpanded(prevState => !prevState)
  };

  const containerFunctions = {
    onButtonClick
  };

  const containerProps = {
    isExpanded
  };

  return (
	<DropdownComponent
      { ...containerFunctions }
      { ...containerProps }
    >
      { children }
    </DropdownComponent>
  );
}
