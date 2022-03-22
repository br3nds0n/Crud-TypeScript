import { Router } from 'express';

import { CreateCategoryController } from '../app/controllers/CreateCategoryController';
import { DeleteCategoryController } from '../app/controllers/DeleteCategoryController';
import { GetAllCategoriesController } from '../app/controllers/GetAllCategoriesController';
import { UpdateCategoryController } from '../app/controllers/UpdateCategoryController';

const routes = Router();

routes
	.post('/categorias', new CreateCategoryController().handle)
	.get('/categorias', new GetAllCategoriesController().handle)
	.delete('/categorias/:id', new DeleteCategoryController().handle)
	.put('/categorias/:id', new UpdateCategoryController().handle);

export { routes };