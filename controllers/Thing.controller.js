const { Thing } = require('./../models/index');
console.log(111, Thing);

module.exports.createThing = async (req, res, next) => {
    const { body } = req;
    try {
       const createdThing = await Thing.create(body);

       if (createdThing) {
        return res.status(201).send(createdThing);
       } else {
        return res.status(400).send();
       }

    } catch (error) {
        next(error);
    }
};

module.exports.getAllThings = async (req, res, next) => {
    try {
      const things = await Thing.findAll();

      return res.status(200).send(things);
    } catch (error) {
      next(error);
    }
};