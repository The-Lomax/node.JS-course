// imports
const fs = require('fs')
const chalk = require('chalk')

// application setup
const nFile = "notes.json"

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const note = {
        title: title,
        text: body
    }
    let notes = loadNotesFromJSON(nFile)
    const duplicateNote = notes.find((el) => el.title === note.title)

    if (!duplicateNote) {
        notes.push(note)
        saveNotesToJSON(nFile, notes)
        console.log(chalk.green("Note added successfully"))
    }
    else {
        console.log(chalk.red("Note already exists"))
    }
}

const editNote = (title, body) => {
    const note = {
        title: title,
        text: body
    }
    let notes = loadNotesFromJSON(nFile)
    let found = notes.filter((el) => el.title === note.title)

    if (found.length > 0) {
        for (el in notes) {
            if (notes[el].title === note.title) {
                notes[el].text = note.text
                break
            }
        }
        saveNotesToJSON(nFile, notes)
        console.log(chalk.green("Note updated successfully"))
    }
    else {
        console.log(chalk.yellow("Note for edit not found, adding instead"))
        addNote(note.title, note.text)
    }
    
}

const removeNote = (title) => {
    let notes = loadNotesFromJSON(nFile)
    
    const newNotes = notes.filter((el) => el.title != title)

    if (newNotes.length == notes.length) {
        console.log(chalk.red("Note not found"))
    }
    else {
        saveNotesToJSON(nFile, newNotes)
        console.log(chalk.green("Note deleted successfully"))
    }
}

const listNotes = () => {
    let notes = loadNotesFromJSON(nFile)

    notes.forEach((el) => console.log(el.title));
}

const readNote = (title) => {
    let notes = loadNotesFromJSON(nFile)

    myNote = notes.find((el) => el.title === title)

    if (myNote) {
        console.log("Note: " + myNote.title + "\nText: " + myNote.text)
    }
    else {
        console.log(chalk.red("Note not found"))
    }
}

const loadNotesFromJSON = (file) => {
    try{
        return JSON.parse(fs.readFileSync(file).toString())
    }
    catch (e) {
        return []
    }
}

const saveNotesToJSON = (file, obj) => fs.writeFileSync(file, JSON.stringify(obj))

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
    editNote: editNote
}