import { Router } from 'express';
import controller from './students.controller';

const router: Router = Router();

router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentsById);
router.put('/:id', controller.updateStudent);

export default router;
