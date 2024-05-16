//fs - file system
// path - прокладую шляхи до файлів

const fs = require('fs');
const path = require('path');

// __dirname - константа Node, зберігає абсолютну адресу поточної папки 
// __filename - константа Node, зберігає абсолютну адресу поточного файлу 

// console.log(__dirname);
// console.log(__filename);

const currentFileName = path.basename(__filename) // поверне нам index.js - назву поточного файлу
// адреса, що підставиться - /home/marusya/dev/projects/http_crud/sandbox/index.js
// console.log(currentFileName);

const db = {};

// короткий варіант - чейнінг 

fs.readdirSync(__dirname).filter(
    (currenFile) => /.js$/.test(currenFile) && currenFile !== currentFileName
).forEach(currenFile => {
    const absolutePathToFile = path.resolve(__dirname, currenFile);

    const Model = require(absolutePathToFile);
    Model._client = client;
    db[Model.name] = Model;
})

// Повний варінт

// const filesNames = fs.readdirSync(__dirname);
// // console.log(filesNames);

// const filteredArray = filesNames.filter(
//      (currenFile) => /.js$/.test(currenFile) && currenFile !== currentFileName
//     );
// // console.log(filteredArray);

// filteredArray.forEach(currenFile => {
//     const absolutePathToFile = path.resolve(__dirname, currenFile);
//     // console.log(absolutePathToFile);
//     const Model = require(absolutePathToFile);
//     Model._client = client;
//     db[Model._tableName] = Model;
// })

