import {useNavigate, useParams} from "react-router";
import cookie from "cookiejs";

export const NoteMore = () => {
    const { id } = useParams();
    const noteListString = cookie.get('notes');
    let noteList = [];
    try {
        noteList = noteListString ? JSON.parse(noteListString) : [];
    } catch (e) {
        console.error(e);
    }

    const note = noteList.find(n => n.id.toString() === id);
    const navigate = useNavigate();
    return (
        <div className={'note-more'}>
            {note ?
                <div>
                    <h2>{note.title}</h2>
                    <p>{note.theme}</p>

                    <h4>{note.text}</h4>

                    <button onClick={() => {
                        navigate(-1)
                    }}>Вернуться назад
                    </button>
                </div>
                :
                <div className={'error'}>Заметка не найдена <button onClick={() => {navigate(-1)}}>Вернуться назад</button></div>}
        </div>
    );
}