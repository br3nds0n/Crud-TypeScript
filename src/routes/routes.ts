import { Router } from 'express';

import { CreateCategoryController } from '../app/controllers/CreateCategoryController';
import { CreateVideosCrontroller } from '../app/controllers/CreateVideoController';
import { DeleteCategoryController } from '../app/controllers/DeleteCategoryController';
import { GetAllCategoriesController } from '../app/controllers/GetAllCategoriesController';
import { GetAllVideosController } from '../app/controllers/GetAllVideosController';
import { UpdateCategoryController } from '../app/controllers/UpdateCategoryController';

const routes = Router();

routes
	.post('/categorias', new CreateCategoryController().handle)
	.get('/categorias', new GetAllCategoriesController().handle)
	.delete('/categorias/:id', new DeleteCategoryController().handle)
	.put('/categorias/:id', new UpdateCategoryController().handle)
	.post('/videos', new CreateVideosCrontroller().handle)
	.get('/videos', new GetAllVideosController().handle);

export { routes };