import { Router } from 'express';
import controller from './books.controller';

const router: Router = Router();

router.get('/get-books', controller.getBooks);

export default router;
