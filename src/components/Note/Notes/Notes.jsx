import {NoteCreate} from "../../NoteCreate/NoteCreate.jsx";
import {NavLink} from "react-router";


export const Notes = ({notes, setNote}) => {
    return(
        <div className='notes'>
            <div className="notes-list">
                <h2>Ваши заметки</h2>
                <ul>
                    {notes.map((note, index) => (
                        <NavLink to={`/notes/${note.id}`} key={note.id}>
                            <li key={index}>
                                {note.title}
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </div>

            <NoteCreate  setNote={setNote}/>
        </div>
    )
}