
export class StudentService {

    constructor() { }

    async getStudents() {
        return new Promise(async (resolve, reject) => {
            try {
                resolve({ message: "successfully copied" });
            } catch (err) {
                reject(err);
            }
        })
    }

}

export default new StudentService();