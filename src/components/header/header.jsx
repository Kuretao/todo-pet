import { useEffect, useState } from "react";
import './header.scss'

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


    return (
        <header className="header">
            <div className="open-side" onClick={sidebarToggle}>{props.sidebar ? 'close' : 'open'}</div>
            <input type="text" placeholder={'search...'} />
            <div className="time">{timeString}</div>
        </header>
    );
}

export default Header;
