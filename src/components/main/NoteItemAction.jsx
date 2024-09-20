import React from "react";

function NoteItemAction({ id, onDelete, onArchive }) {
    return (
        <div className="note-item__action">
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => onArchive(id)}>Arsipkan</button>
        </div>
    );
}

export default NoteItemAction;