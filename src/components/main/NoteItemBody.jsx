import React from "react";

function NoteItemBody({ title, body, createdAt }) {
    return (
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <span className="note-item__date">{createdAt}</span>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemBody;