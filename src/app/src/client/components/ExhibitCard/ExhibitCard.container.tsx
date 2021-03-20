import ExhibitCardComponent from 'Component/ExhibitCard/ExhibitCard.component';
import ComponentPropsInterface from 'Component/ExhibitCard/interfaces/componentProps.interface';

export default function ExhibitCard(props: ComponentPropsInterface) {
  return (
    <ExhibitCardComponent { ...props }/>
  );
}
