const http = require ('http');

// app передається в якості requestListener в createServer
const app = require ('./app')

//змінні оточення process.env
const PORT = process.env.PORT || 5000;

const server = http.createServer(app); //сервер треба підняти

server.listen(PORT, () => { //порт на якому буде піднятий сервер
    console.log(`App started on port ${PORT}`);
}) 