import React from "react";
import NoteItemBody from "./NoteItemBody";
import ArchiveItemAction from "./ArchiveItemAction";

function NoteItem({ title, body, createdAt, id, onDelete, onUnarchive }) {
    return (
        <div className="note-item col-lg-3 col-md-4 col-sm-6">
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