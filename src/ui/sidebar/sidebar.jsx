import './sidebar.scss'
import delIcon from './../../assets/delete.svg';
import cookie from "cookiejs";
import {NavLink} from "react-router";

function Sidebar(props) {
    const noteListString = cookie.get('notes');
    let noteList = [];
    try {
        noteList = noteListString ? JSON.parse(noteListString) : {};
        console.log(noteList);
    } catch (e) {
        console.error('Ошибка в сайдбаре', e);
    }
    return(
        <aside className={props.sidebar ? "sidebar" : "sidebar sidebar--close"} style={props.sidebar ? {width: '350px'} : {width: '100px'}}>
            <ul>
                {noteList.map((note, index) => (
                    <NavLink to={`/notes/${note.id}`} key={note.id}>
                        <li key={index}>
                            <i>{index + 1}</i>
                            <span style={props.sidebar ? {color: "#fff", fontSize: 16, gap:8} : {color: "transparent", fontSize: 0, gap:0} }>{note.title}</span>
                        </li>
                    </NavLink>
                ))}
            </ul>

            <span onClick={() => {cookie.set('notes', 'как пользоваться нашим приложением?')}} style={props.sidebar ? {color: "#fff", fontSize: 16, gap:8} : {color: "transparent", fontSize: 0, gap:0} }><img src={delIcon} alt=""/> clear</span>
        </aside>
    )
}

export default Sidebar;