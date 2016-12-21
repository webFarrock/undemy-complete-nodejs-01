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
    console.log('call getAll() function');
}

const getNote = (title) =>{
    console.log(`call getNote(${title}) function`);
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
}
