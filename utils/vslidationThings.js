/* 
Валідація!!!
При створенні Thing :
1. Body не має бути пустим
2. Body має довжину від 3 до 100 символів
*/

const yup = require('yup');

// Схема валідації

const ThingSchema = yup.object({
    body: yup.string().required().min(3).max(100)
});

// middleware

module.exports.validateThing = async (req, res, next) => {
    const { body } = req;

    try {
       const validatedObject =  await ThingSchema.validate(body);

       if (validatedObject) {
        next();
       }
    } catch (error) {
        next(error);
    }
}