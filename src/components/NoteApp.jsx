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
            archivedNotes: [],
            searchKeyword: ''
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onDeleteArchivedNoteHandler = this.onDeleteArchivedNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
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

    onSearchNoteHandler(event) {
        this.setState({ searchKeyword: event.target.value });
    }

    render() {
        const filteredNotes = this.state.notes.filter(note =>
            note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
        );

        const filteredArchivedNotes = this.state.archivedNotes.filter(note =>
            note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
        );

        return (
            <div className="note-app__body">
                <nav className="navbar bg-body-tertiary mb-4">
                    <div className="container-fluid">
                        <a className="navbar-brand">Notes</a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Cari Catatan..." aria-label="Search" value={this.state.searchKeyword} onChange={this.onSearchNoteHandler}  />
                        </form>
                    </div>
                </nav>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h4>Buat Catatan</h4>
                            <NoteInput addNote={this.onAddNoteHandler} />       
                        </div>
                    </div>
                </div>
                <div className="container pb-4">
                    <h4 className="mb-3">Catatan Aktif</h4>
                    {filteredNotes.length === 0 ? (
                        <h6 className="note-item__date card-subtitle mb-2 text-body-secondary text-center">Tidak ada catatan</h6>
                    ) : (
                        <NoteList notes={filteredNotes} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} />
                    )}
                    <h4 className="mb-3 mt-5">Arsip</h4>
                    {filteredArchivedNotes.length === 0 ? (
                        <h6 className="note-item__date card-subtitle mb-2 text-body-secondary text-center">Tidak ada catatan</h6>
                    ) : (
                    <ArchiveList archivedNotes={filteredArchivedNotes} onDelete={this.onDeleteArchivedNoteHandler} onUnarchive={this.onUnarchiveNoteHandler} />
                    )}
                </div>
            </div>
        );
    }
}

export default NoteApp;