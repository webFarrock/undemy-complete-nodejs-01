// let obj = {
//     name: 'Pavel',
//     age: 5,
//     myarr: [1, 2, 3, 'hello']
// }
//
// console.log(obj);
// let stringObj = JSON.stringify(obj);
// console.log(stringObj);
//


//let test = '{"name":"Pavel","age":5,"myarr":[1,2,3,"hello"]}';

//console.log(JSON.parse(test).name);


const fs = require('fs');

let originalNote = {
    title: 'some title',
    body: 'some body',
}

let originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);

let noteStr = fs.readFileSync('notes.json');

let noteObj  = JSON.parse(noteStr);

console.log('noteStr:',noteStr);
console.log('noteObj:',noteObj);