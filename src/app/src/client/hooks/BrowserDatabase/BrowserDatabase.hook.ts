import IBrowserDatabaseHook from 'Hooks/BrowserDatabase/interfaces/BrowserDatabase.interface';

export default function useBrowserDatabase(): IBrowserDatabaseHook {
	const setItem = (data: any, location: string, expiration: number) => {
		localStorage.setItem(
			location,
			JSON.stringify(
				{
					data,
					expiration,
					createdAt: Date.now()
				}
			)
		);
	}

	const getItem = (location: string) => {
		try {
			const entryObject = JSON.parse(localStorage.getItem(location));
			const { data, expiration, createdAt } = entryObject;
			const MILLISECONDS_TO_SECONDS = 1000;

			if (expiration && Date.now() - createdAt > expiration * MILLISECONDS_TO_SECONDS) {
				localStorage.removeItem(location);
				return null;
			}

			return data || entryObject;
		} catch (e) {
			return null
		}
	}

	const deleteItem = (location: string) => {
		localStorage.removeItem(location);
	}

	return {
		setItem,
		getItem,
		deleteItem
	};
}
