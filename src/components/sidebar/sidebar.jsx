import './sidebar.scss'
import delIcon from './../../assets/delete.svg';

function Sidebar(props) {
    return(
        <aside className={props.sidebar ? "sidebar" : "sidebar sidebar--close"} style={props.sidebar ? {width: '350px'} : {width: '100px'}}>
            <ul>
                <li>s</li>
            </ul>

            <span style={props.sidebar ? {color: "#fff", fontSize: 16, gap:8} : {color: "transparent", fontSize: 0, gap:0} }><img src={delIcon} alt=""/> clear</span>
        </aside>
    )
}

export default Sidebar;