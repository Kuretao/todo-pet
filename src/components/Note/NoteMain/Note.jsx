import cookie from "cookiejs";
import {NoteCreate} from "../../NoteCreate/NoteCreate.jsx";
import {useState} from "react";
import './Note.scss';

function Note() {
    const [note, setNote] = useState(() => {
        const notes = cookie.get('notes');
        if (notes) {
            try {
                return JSON.parse(notes);
            } catch {
                return [];
            }
        }
        return [];
    });

    return (
        <section className="note-section">
            {(!note || note.length === 0) && <NoteCreate setNote={setNote} />}
        </section>
    );
}

export default Note;
