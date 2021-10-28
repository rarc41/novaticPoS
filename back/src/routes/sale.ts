import { Router } from 'express';
import SaleController from '../controllers/sale';

const router = Router();

router.get('/', SaleController.getSales());
router.post('/', SaleController.createSale());
router.put('/:saleId/', SaleController.updateSale());

export default router;
