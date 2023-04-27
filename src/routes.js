import { Router } from 'express';
import { productController } from './controllers/productController.js';

const router = Router();

router.get('/products', productController.getProducts)

export { router }