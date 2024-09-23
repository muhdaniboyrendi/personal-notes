import React from "react";

function NoteItemAction({ id, onDelete, onArchive }) {
    return (
        <div className="note-item__action d-grid gap-2">
            <button className="btn btn-outline-danger" onClick={() => onDelete(id)}>Delete</button>
            <button className="btn btn-outline-warning" onClick={() => onArchive(id)}>Arsipkan</button>
        </div>
    );
}

export default NoteItemAction;