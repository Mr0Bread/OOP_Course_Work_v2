import ExhibitsListComponent from 'Component/ExhibitsList/ExhibitsList.component';
import useRequests from 'Hooks/Requests';
import { useEffect, useState } from 'react';
import ExhibitInterface from '../../../server/modules/exhibit/interfaces/exhibit.interface';

export default function ExhibitsList() {
  const { fetchGet } = useRequests();
  const [exhibits, setExhibits] = useState<ExhibitInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
	fetchGet<ExhibitInterface[]>(
	  '/exhibit/getAll'
	)
	  .then(
		(res) => {
		  setExhibits(res);
		  setIsLoading(false);
		},
		(err) => {
		  console.log(err);
		  setIsLoading(false);
		}
	  );
  }, []);

  return (
    <ExhibitsListComponent
	  exhibits={ exhibits }
	  isLoading={ isLoading }
	/>
  );
}
