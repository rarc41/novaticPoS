import { Router, Request, Response } from 'express';
import product from './product';
import sale from './sale';
import user from './user';

const router = Router();
const path = '/api/v1/';

router.use(`${path}products`, product);
router.use(`${path}users`, user);
router.use(`${path}sales`, sale);
// NOT FOUND
router.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Endpoint no encontrado. :(', data: null });
});

export default router;
