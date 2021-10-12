import { Router } from 'express';
import ProductController from '../controllers/product';

const router = Router();

router.get('/', ProductController.getProducts());
router.post('/', ProductController.createProduct());
router.put('/:productId/', ProductController.updateProduct());

export default router;
