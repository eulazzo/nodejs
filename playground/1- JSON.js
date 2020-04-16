
const fs = require('fs');
// const book = {
//     title:'Ego is the enemy',
//     author: 'Ryan'
// }

// const bookJson = JSON.stringify(book);
 
// fs.writeFileSync('1-json.json',bookJson);
const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer.toString());
