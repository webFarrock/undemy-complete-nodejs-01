console.log('starting note.js');

const addNote = (title, body) => {
    console.log('Adding note', title, body);
}
 
const getAll = () =>{
    console.log('call getAll() function');
}

const getNote = (title) =>{
    console.log(`call getNote(${title}) function`);
}

const removeNote = (title) =>{
    console.log(`call remove(${title}) function`);
}



module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
}
