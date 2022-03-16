import { createConnection } from 'typeorm';

class Connection {
	constructor() {
		this.connect();
	}

	private async connect(): Promise<void> {
		try {
			await createConnection();
			console.log('connect to database!');

		} catch (error) {
			console.log(error);
		}
	}
}

export default new Connection();
