
export class BooksService {

    constructor() { }

    async getBooks() {
        return new Promise(async (resolve, reject) => {
            try {
                resolve({ message: "successfully copied" });
            } catch (err) {
                reject(err);
            }
        })
    }

}

export default new BooksService();