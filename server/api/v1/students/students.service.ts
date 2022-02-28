import knexDB from "../../../common/database/database";

export class StudentService {

    constructor() { }

    async getStudents() {
        return new Promise(async (resolve, reject) => {
            try {
                const students = await knexDB.select("*")
                    .from("student")
                    .orderBy('id', 'asc')
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

                if (!payload) {
                    reject({ code: 400, message: "Payload can't be empty, object can't be null." })
                }

                const udpated = await knexDB
                    .from("student")
                    .where({ id })
                    .update(payload)

                resolve({ message: "Student Updated Successfully", udpated });
            } catch (err) {
                reject(err);
            }
        })
    }

}

export default new StudentService();