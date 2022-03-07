const notes = require('./notes.js')
const yargs = require('yargs')

// create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note text",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

// create edit command
yargs.command({
    command: 'edit',
    describe: 'edit existing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note text",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.editNote(argv.title, argv.body)
})

// create delete command
yargs.command({
    command: 'del',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

// create list command
yargs.command({
    command: "list",
    describe: 'listing all notes',
    handler: () => notes.listNotes()
})

// create read command
yargs.command({
    command: 'read',
    describe: 'reading selected node',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
})

yargs.parse()