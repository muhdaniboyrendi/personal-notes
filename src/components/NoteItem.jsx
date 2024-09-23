import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, body, createdAt, id, onDelete, onArchive }) {
    return (
        <div className="note-item col-md-3">
            <div className="card border-light mb-4">
                <div className="card-body">
                    <NoteItemBody title={title} createdAt={createdAt} body={body} />
                    <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} />
                </div>
            </div>
        </div>
    );
}

export default NoteItem;