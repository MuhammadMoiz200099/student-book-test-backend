import knexDB from "../../../common/database/database";

export class BooksService {

    constructor() { }

    async getBooks() {
        return new Promise(async (resolve, reject) => {
            try {
                const books = await knexDB.select("*")
                    .from("book")
                    .then(rows => rows);

                resolve(books);
            } catch (err) {
                reject(err);
            }
        })
    }
    async getBooksbyId(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const [books] = await knexDB.select("*")
                    .from("book")
                    .where('id', id)
                    .then(rows => rows);

                resolve(books);
            } catch (err) {
                reject(err);
            }
        })
    }
    async updateBook(id, payload) {
        return new Promise(async (resolve, reject) => {
            try {
                await knexDB
                    .from("book")
                    .where({ id })
                    .update(payload)

                resolve({ message: "Book Updated Successfully" });
            } catch (err) {
                reject(err);
            }
        })
    }

}

export default new BooksService();