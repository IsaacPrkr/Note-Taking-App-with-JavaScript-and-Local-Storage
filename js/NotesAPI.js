export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]")
    }

    static saveNote(noteToSave) {

    }

    static deleteNote(id) {

    }
}