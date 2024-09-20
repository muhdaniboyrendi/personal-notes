import React from "react";
import NoteList from "./main/NoteList";
import { getData } from "../utils/index";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData()
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onSearchNoteHandler(title) {
        const notes = this.state.notes.filter(note => note.title !== title);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title, 
                        body, 
                        createdAt: +new Date()
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="note-app__body">
                <h2>Buat Catatan</h2>
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} />
                <NoteList notes={this.state.notes} onArchive={this.onArchiveNoteHandler} />
                <h2>Arsip</h2>
            </div>
        );
    }
}

export default NoteApp;