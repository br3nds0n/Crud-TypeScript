import { Router } from 'express';

import { CreateCategoryController } from '../app/controllers/CreateCategoryController';
import { GetAllCategoriesController } from '../app/controllers/GetAllCategoriesController';

const routes = Router();

routes
	.post('/categorias', new CreateCategoryController().handle)
	.get('/categorias', new GetAllCategoriesController().handle);


export { routes };