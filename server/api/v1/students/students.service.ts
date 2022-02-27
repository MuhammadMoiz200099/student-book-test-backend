import knexDB from "../../../common/database/database";

export class StudentService {

    constructor() { }

    async getStudents() {
        return new Promise(async (resolve, reject) => {
            try {
                const students = await knexDB.select("*")
                .from("student")
                .then(rows => rows);

                resolve(students);
            } catch (err) {
                reject(err);
            }
        })
    }

}

export default new StudentService();