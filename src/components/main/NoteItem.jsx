import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, body, createdAt, id, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} createdAt={createdAt} body={body} />
            <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteItem;