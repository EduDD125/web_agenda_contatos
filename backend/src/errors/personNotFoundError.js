class PersonNotFoundError extends Error {
    constructor(id) {
        super(`ID ${id} não está cadastrado`);
        this.name = "PersonNotFoundError";
        this.statusCode = 404;
    }
}