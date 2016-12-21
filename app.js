console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

const command = argv._[0];



console.log('command: ', command);
console.log('Yargs: ', argv);

if(command === 'add'){

    let note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note);
    }else{
        console.log('Note title taken');
    }

}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    const note = notes.getNote(argv.title);

    if(note){
        console.log('Here your note:');
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }

}else if(command === 'remove'){
    const noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found' ;

    console.log(message);

}else{
    console.log('Command not recognized');
}