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

}

export default new BooksService();