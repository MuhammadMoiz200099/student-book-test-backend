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
    async getStudentsById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const [students] = await knexDB.select("*")
                    .from("student")
                    .where({ id })
                    .then(rows => rows);

                resolve(students);
            } catch (err) {
                reject(err);
            }
        })
    }
    async updateStudent(id, payload) {
        return new Promise(async (resolve, reject) => {
            try {
                await knexDB
                    .from("student")
                    .where({ id })
                    .update(payload)

                resolve({ message: "Student Updated Successfully" });
            } catch (err) {
                reject(err);
            }
        })
    }

}

export default new StudentService();