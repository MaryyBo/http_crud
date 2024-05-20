class NotFoundError extends Error {
    constructor (message) {
        super (message);
        this.message = 'Thing is not found'
    }
}

module.exports = NotFoundError;