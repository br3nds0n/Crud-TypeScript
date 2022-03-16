import { Router } from 'express';

import { CreateCategoryController } from './controllers/CreateCategoryController';

const routes = Router();

routes.post('/categorias', new CreateCategoryController().handle);

export { routes };