import { Router } from 'express';
import controller from './students.controller';

const router: Router = Router();

router.get('/get-students', controller.getStudents);

export default router;
