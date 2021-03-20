import ContainerPropsInterface from 'Component/ExhibitDetails/interfaces/containerProps.interface';
import ExhibitDetailsComponent from 'Component/ExhibitDetails/ExhibitDetails.component';
import { useEffect, useState } from 'react';
import ExhibitInterface from 'Server/modules/exhibit/interfaces/exhibit.interface';
import useRequests from 'Hooks/Requests';
import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';

export default function ExhibitDetails(props: ContainerPropsInterface) {
  const { id } = props;
  const [exhibitDetails, setExhibitDetails] = useState<ExhibitInterface | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchGet } = useRequests();

  useEffect(() => {
	fetchGet<ExhibitInterface | BasicResponseInterface>(
	  `/exhibit/getOne?id=${ id }`
	)
	  .then(
		(res) => {
		  setIsLoading(false);

		  const {
			statusCode,
			message
		  } = (res as BasicResponseInterface);

		  if (statusCode || statusCode === HttpStatus.BAD_REQUEST) {
			console.log(message);
			setIsLoading(false);
		  }

		  setExhibitDetails((res as ExhibitInterface));
		},
		(err) => {
		  console.log(err);
		  setIsLoading(false);
		}
	  );
  }, []);

  const containerProps = {
	isLoading,
	exhibitDetails
  };

  return (
	<ExhibitDetailsComponent
	  { ...containerProps }
	/>
  );
}
