const fs = require('fs');
const path = require('path');

const { Client } = require('pg');
const config = require ('../configs/postgres.json')

const currentFileName = path.basename(__filename);

// const Thing = require ('./Things'); так робитися НЕ БУДЕ


const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env]; // dbConfig = config.development
const client = new Client(dbConfig);

// beforeExit

client.connect();

const db = {
    client
};

fs.readdirSync(__dirname).filter(
    (currenFile) => /.js$/.test(currenFile) && currenFile !== currentFileName
).forEach(currenFile => {
    const absolutePathToFile = path.resolve(__dirname, currenFile);

    const Model = require(absolutePathToFile);
    Model._client = client;
    db[Model.name] = Model;
})

// Thing._client = client; //даємо посилання на ось цей клієнт const client = new Client(dbConfig); AЛЕ  так робитися НЕ БУДЕ


process.on ('beforeExit', () => {
    client.end();
})

module.exports = {
    db,
    // Thing ---  так робитися НЕ БУДЕ
};