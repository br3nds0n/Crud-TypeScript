import express, { Express } from 'express';
import { routes } from './routes/routes';
import './db/Connection';

class App {
	readonly express: Express;

	constructor() {
		this.express = express();

		this.middlewares();
		this.rotues();
	}

	middlewares(): void {
		this.express.use(express.json());
		this.express.use(express.urlencoded({ extended: true }));
	}

	rotues(): void {
		this.express.use(routes);
	}
  
}

export default new App().express;