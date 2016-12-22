console.log('starting note.js');

const fs = require('fs');

const fetchNotes = () => {
    try{
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
}

const logNote = (note) => {
    console.log('------------');
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    console.log('Adding note', title, body);

    let notes   = fetchNotes();
    let note    = {title, body};


    var duplicateNotes = notes.filter((note) => note.title === title);

    if(!duplicateNotes.length){
        notes.push(note);
        saveNotes(notes);
        return note;
    }

}
 
const getAll = () =>{
    return fetchNotes();
}

const getNote = (title) =>{
    const notes   = fetchNotes();
    const findedNote = notes.filter((note) => note.title === title);
    return findedNote[0];
}

const removeNote = (title) =>{

    let notes       = fetchNotes();
    let uniqNotes   = notes.filter((note) => note.title !== title);

    saveNotes(uniqNotes);

    return notes.length !== uniqNotes.length;
}



module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
}
