import { Router } from 'express';

import bookRouter from './books';
import studentRouter from './students';

const router: Router = Router();

router.use('/book', bookRouter);
router.use('/student', studentRouter);

export default router;
