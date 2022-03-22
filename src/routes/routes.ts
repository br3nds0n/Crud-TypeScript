import { Router } from 'express';

import { CreateCategoryController } from '../app/controllers/CreateCategoryController';
import { DeleteCategoryController } from '../app/controllers/DeleteCategoryController';
import { GetAllCategoriesController } from '../app/controllers/GetAllCategoriesController';

const routes = Router();

routes
	.post('/categorias', new CreateCategoryController().handle)
	.get('/categorias', new GetAllCategoriesController().handle)
	.delete('/categorias/:id', new DeleteCategoryController().handle);

export { routes };