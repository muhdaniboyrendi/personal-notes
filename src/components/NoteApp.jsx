import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData()
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
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
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} />
                    <NoteList notes={this.state.notes} onArchive={this.onArchiveNoteHandler} />
                    <h4>Arsip</h4>
                </div>
            </div>
        );
    }
}

export default NoteApp;