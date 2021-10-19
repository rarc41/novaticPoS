import { Router } from 'express';
import UserController from '../controllers/user';

const router = Router();

router.get('/', UserController.getUsers());
router.post('/', UserController.createUser());
router.put('/:userId/', UserController.updateUser());

export default router;
