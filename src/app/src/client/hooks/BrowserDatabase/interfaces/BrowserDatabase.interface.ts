interface IItem {
	[key: string]: any
}

export default interface IBrowserDatabaseHook {
	getItem: (location: string) => IItem | void
	setItem: (data: any, location: string, expiration: number) => void
	deleteItem: (location: string) => void
}
