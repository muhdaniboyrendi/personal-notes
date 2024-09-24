import React from "react";
import NoteItem from "./NoteItem";

function NoteIList({ notes, onDelete, onArchive }) {
    return (
        <div className="note-list row">
            {
                notes.map((note) => (
                    <NoteItem 
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note}
                    />
                ))
            }
        </div>
    );
}

export default NoteIList;