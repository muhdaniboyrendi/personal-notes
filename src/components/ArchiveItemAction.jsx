import React from "react";

function ArchiveItemAction({ id, onDelete, onUnarchive }) {
    return (
        <div className="note-item__action d-grid gap-2">
            <button className="btn btn-outline-danger" onClick={() => onDelete(id)}>Delete</button>
            <button className="btn btn-outline-warning" onClick={() => onUnarchive(id)}>Pindahkan</button>
        </div>
    );
}

export default ArchiveItemAction;