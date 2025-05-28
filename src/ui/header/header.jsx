import { useEffect, useState } from "react";
import close from './../../assets/close.svg';
import open from './../../assets/open.svg';
import './header.scss'
import {NavLink} from "react-router";
import cookie from "cookiejs";

function Header(props) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (num) => num.toString().padStart(2, '0');
    const timeString = `${formatTime(time.getHours())}:${formatTime(time.getMinutes())}:${formatTime(time.getSeconds())}`;
    function sidebarToggle() {
        props.setSidebarToggle(!props.sidebar);
    }
    const noteListString = cookie.get('notes');
    let noteList = [];
    try {
        noteList = noteListString ? JSON.parse(noteListString) : {};
    } catch (e) {
        console.error('Ошибка в сайдбаре', e);
    }

    const [search, setSearch] = useState('');
    const onChange = e => {
        setSearch(e.target.value);
    }

    const filteredNotes = noteList.filter((note) => {
        return note.title.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <header className="header">
            <div>
                <img src={props.sidebar ?  close : open } alt="" onClick={sidebarToggle}/>
            </div>
            <div className={`search ${search ? 'active' : ''}`}>
                <input id="input" value={search} onChange={onChange} type="text" placeholder={'Поиск...'}/>
                {
                    search
                    &&
                    filteredNotes.length > 0
                    &&
                    <ul>
                        {filteredNotes.map((note, index) => (
                            <NavLink to={`/notes/${note.id}`} onClick={() => {setSearch('')}} key={note.id}>
                                <li key={index}>
                                    <span>{note.title}</span>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                }
            </div>
            <div className="time">{timeString}</div>
        </header>
    );
}

export default Header;
