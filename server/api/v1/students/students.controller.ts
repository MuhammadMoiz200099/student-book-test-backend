import { Request, Response } from "express";
import l, { logger } from "../../../common/logger";
import { manageError } from "../../../helper/response.helper";
import { BaseController } from "../_base.controller";
import StudentService from "./students.service";

export class Controller extends BaseController {

    async getStudents(_: Request, res: Response): Promise<void> {
        try {
            const response = await StudentService.getStudents();
            super.response(res, response, 200, "");
        }
        catch (error) {
            logger.error(error);
            const err = manageError(error);
            l.error(`Error in , err code: ${400}`);
            l.error(err.message);
            super.response(res, '', err.code, err.message);
        }
    }
}

export default new Controller();
