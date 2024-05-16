const { Client } = require('pg');
const config = require ('../configs/postgres.json')

// const Thing = require ('./Things'); так робитися НЕ БУДЕ


const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env]; // dbConfig = config.development
const client = new Client(dbConfig);

// beforeExit

client.connect();

// Thing._client = client; //даємо посилання на ось цей клієнт const client = new Client(dbConfig); AЛЕ  так робитися НЕ БУДЕ


process.on ('beforeExit', () => {
    client.end();
})

module.exports = {
    client,
    // Thing ---  так робитися НЕ БУДЕ
};