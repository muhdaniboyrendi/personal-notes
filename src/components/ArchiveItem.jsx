import React from "react";
import NoteItemBody from "./NoteItemBody";
import ArchiveItemAction from "./ArchiveItemAction";

function NoteItem({ title, body, createdAt, id, onDelete, onUnarchive }) {
    return (
        <div className="note-item col-md-3">
            <div className="card border-light mb-4">
                <div className="card-body">
                    <NoteItemBody title={title} createdAt={createdAt} body={body} />
                    <ArchiveItemAction id={id} onDelete={onDelete} onUnarchive={onUnarchive} />
                </div>
            </div>
        </div>
    );
}

export default NoteItem;