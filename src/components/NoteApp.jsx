import React from "react";
import NoteList from "./NoteList";
import ArchiveList from "./ArchiveList";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            archivedNotes: []
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onDeleteArchivedNoteHandler = this.onDeleteArchivedNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onDeleteArchivedNoteHandler(id) {
        const archivedNotes = this.state.archivedNotes.filter(note => note.id !== id);
        this.setState({ archivedNotes });
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

    onArchiveNoteHandler(id) {
        const noteToArchive = this.state.notes.find(note => note.id === id);
        
        this.setState((prevState) => ({
            notes: prevState.notes.filter(note => note.id !== id),
            archivedNotes: [
                ...prevState.archivedNotes,
                noteToArchive
            ]
        }));
    }

    onUnarchiveNoteHandler(id) {
        const noteToUnarchive = this.state.archivedNotes.find(note => note.id === id);
        
        this.setState((prevState) => ({
            archivedNotes: prevState.archivedNotes.filter(note => note.id !== id),
            notes: [
                ...prevState.notes,
                noteToUnarchive
            ]
        }));
    }

    render() {
        return (
            <div className="note-app__body">
                <div className="container mb-5">
                    <h4 className="text-center">Buat Catatan</h4>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <NoteInput addNote={this.onAddNoteHandler} />       
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h4 className="mb-3">Catatan Aktif</h4>
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} />
                    <h4 className="mb-3 mt-4">Arsip</h4>
                    <ArchiveList archivedNotes={this.state.archivedNotes} onDelete={this.onDeleteArchivedNoteHandler} onUnarchive={this.onUnarchiveNoteHandler} />
                </div>
            </div>
        );
    }
}

export default NoteApp;