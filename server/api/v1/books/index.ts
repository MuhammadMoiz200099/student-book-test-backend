import { Router } from 'express';
import controller from './books.controller';

const router: Router = Router();

router.get('/', controller.getBooks);
router.get('/:id', controller.getBooksbyId);
router.put('/:id', controller.updateBook);

export default router;
