import React from "react";
import { getData } from "../../utils/index";

class NotesActive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveNoteHandler({ name, tag }) {
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name, 
                        tag, 
                        imageUrl: '/images/default.jpg'
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Aplikasi Kontak</h1>
                <h2>Tambah Kontak</h2>
                <ContactInput addContact={this.onAddContactHandler} />
                <h2>Daftar Kontak</h2>
                <ContactIList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default NotesActive;