import React from "react";

function NoteItemBody({ title, body, createdAt }) {
    return (
        <div className="note-item__body">
            <h5 className="note-item__title mb-3 card-title">{title}</h5>
            <h6 className="note-item__date card-subtitle mb-2 text-body-secondary">{createdAt}</h6>
            <hr />
            <p className="note-item__body card-text mb-3">{body}</p>
        </div>
    );
}

export default NoteItemBody;