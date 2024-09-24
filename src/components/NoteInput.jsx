import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxTitleLength: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        const remainingChars = this.state.maxTitleLength - this.state.title.length;

        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h6 className="text-end text-body-secondary">{remainingChars} karakter tersisa</h6>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Title" value={this.state.tiile} onChange={this.onTitleChangeEventHandler} maxLength={this.state.maxTitleLength} />
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control h-25" rows="5" placeholder="Masukkan teks..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                </div>
                <div className="d-grid">
                    <button className="btn btn-outline-primary" type="submit">Tambah</button>
                </div>
            </form>
        );
    }
}

export default NoteInput;