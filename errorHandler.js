const DataBaseError = require("./errors/DataBAseError")
const { ValidationError } = require('yup');
const NotFoundError = require ('./errors/NotFoundError');


module.exports.basicErrorHandler = (err, req, res, next) => {
    if (err instanceof DataBaseError) {
        return res.status(404).send('Something wrong with database')
    }

    if (err instanceof TypeError) {
        return res.status(400).send('Thing doesn`t exist')
    }

    if (err instanceof RangeError) {
        return res.status(404).send('No Things were found')
    }

    if (err instanceof ValidationError) {
        return res.status(400).send(err.message)
    }

    if (err instanceof NotFoundError) {
        return res.status(404).send(err.message)
    }
}