import React from "react";
import ArchiveItem from "./ArchiveItem";

function ArchiveList({ archivedNotes, onDelete, onUnarchive }) {
    return (
        <div className="archive-list row">
            {
                archivedNotes.map((note) => (
                    <ArchiveItem 
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onUnarchive={onUnarchive}
                        {...note}
                    />
                ))
            }
        </div>
    );
}

export default ArchiveList;